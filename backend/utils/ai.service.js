const { CohereClient } = require("cohere-ai");
const Groq = require("groq-sdk");

// Initialize APIs
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * Helper: extract JSON from a string that may have markdown fences or extra text
 */
function extractJSON(text) {
  let cleaned = text.trim();

  // Remove markdown code fences
  cleaned = cleaned.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();

  // Try direct parse first
  try {
    return JSON.parse(cleaned);
  } catch (_) {}

  // Try to find a JSON object within the text using regex
  const match = cleaned.match(/\{[\s\S]*\}/);
  if (match) {
    return JSON.parse(match[0]);
  }

  throw new Error("No valid JSON found in AI response: " + cleaned.substring(0, 200));
}

/**
 * Analyzes a complaint description using Groq for vision (if image provided)
 * and Cohere (v8 chat API) for text processing.
 */
exports.analyzeComplaint = async (text, imageBase64 = null, mimeType = null) => {
  let visualContext = "";

  // 1. If an image is provided, get visual context from Groq Vision
  if (imageBase64 && mimeType) {
    try {
      const dataUrl = `data:${mimeType};base64,${imageBase64}`;
      const groqResponse = await groq.chat.completions.create({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Analyze this image and briefly describe the civic/infrastructure problem shown (e.g., broken road, overflowing garbage bin, water leak, damaged streetlight). Keep it to 1-2 sentences.",
              },
              { type: "image_url", image_url: { url: dataUrl } },
            ],
          },
        ],
        max_tokens: 200,
      });

      visualContext = groqResponse.choices[0]?.message?.content || "";
      console.log("✅ Groq Vision:", visualContext);
    } catch (visionError) {
      // Non-fatal: continue without image context
      console.error("⚠️  Groq Vision Error (continuing without image context):", visionError.message);
    }
  }

  // 2. Pass everything to Cohere chat (v8 API) to get structured JSON
  const userMessage = `
You are an AI assistant for a District Complaint Management System in India.
A citizen has submitted a complaint.

Citizen's Text Description:
"${text}"

${visualContext ? `Visual Context (from AI analyzing an uploaded photo):\n"${visualContext}"` : ""}

Analyze the above and respond with ONLY a raw JSON object (no markdown, no explanation, just the JSON):
{
  "title": "A short, concise title in English (max 5-6 words)",
  "description": "A clear, standard English summary of the complaint",
  "category": "The general category (e.g., Road Issue, Water Leakage, Sanitation, Electricity, Public Property)",
  "department": "The most appropriate government department (e.g., PWD, Water Department, Sanitation Department, Electricity Board, Municipal Corporation)",
  "priority": "LOW, MEDIUM, HIGH, or CRITICAL based on urgency and danger",
  "originalLanguage": "The language the complaint was originally written in (e.g., Marathi, Hindi, English)"
}
`.trim();

  try {
    const response = await cohere.chat({
      message: userMessage,
      model: "command-r-plus-08-2024",
      temperature: 0.1,
    });

    console.log("✅ Cohere Raw Response:", response.text);
    const result = extractJSON(response.text);
    return result;
  } catch (error) {
    console.error("❌ Cohere Analysis Error:", error.message || error);
    throw new Error("Failed to analyze complaint: " + (error.message || "Unknown Cohere error"));
  }
};

/**
 * Detects if a new complaint is a duplicate using Cohere (v8 chat API).
 */
exports.detectDuplicate = async (newComplaintText, existingComplaints) => {
  if (!existingComplaints || existingComplaints.length === 0) return null;

  try {
    const existingData = existingComplaints.map((c) => ({
      id: c._id.toString(),
      description: c.description,
      category: c.category,
    }));

    const userMessage = `
You are a duplicate detection system for a government complaint portal.

New complaint: "${newComplaintText}"

Existing recent complaints in the same area:
${JSON.stringify(existingData, null, 2)}

Is the new complaint reporting the EXACT SAME specific issue as one of the existing complaints?
Respond ONLY with a raw JSON object (no markdown):
{
  "isDuplicate": true or false,
  "duplicateOfId": "the _id of the matched complaint, or null",
  "reason": "Brief reason for your decision"
}
`.trim();

    const response = await cohere.chat({
      message: userMessage,
      model: "command-r-plus-08-2024",
      temperature: 0.1,
    });

    const result = extractJSON(response.text);
    if (result.isDuplicate && result.duplicateOfId) {
      return result.duplicateOfId;
    }
    return null;
  } catch (error) {
    console.error("⚠️  Duplicate Detection Error (non-fatal):", error.message);
    return null; // Non-fatal - complaint is still created
  }
};

/**
 * AI Chatbot using Cohere's Chat API (v8).
 */
exports.chatWithBot = async (userMessage, userComplaints) => {
  try {
    const complaintsContext = userComplaints.map((c) => ({
      complaintNumber: c.complaintNumber,
      title: c.title,
      status: c.status,
      department: c.department?.name || "Not yet assigned",
      submittedOn: c.createdAt,
    }));

    const preamble = `You are a helpful, friendly customer support AI for a District Complaint Management System in India.
A citizen is asking a question about their complaints. Here is their recent complaint history:
${JSON.stringify(complaintsContext, null, 2)}

Instructions:
1. Answer the user's question concisely and helpfully based on their complaint history.
2. If they ask about the status of a specific complaint, provide the status and the assigned department.
3. If no complaints match, suggest they submit a new complaint through the app.
4. CRITICAL: Always reply in the SAME LANGUAGE the user wrote their message in.`;

    const response = await cohere.chat({
      message: userMessage,
      model: "command-r-plus-08-2024",
      preamble: preamble,
      temperature: 0.3,
    });

    return response.text;
  } catch (error) {
    console.error("❌ Chatbot Error:", error.message || error);
    throw new Error("Failed to generate chatbot response.");
  }
};
