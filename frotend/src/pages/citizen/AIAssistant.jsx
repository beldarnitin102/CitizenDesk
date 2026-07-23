import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // 1. FIXED: Imported useAuth context hook

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ChatWindow from "../../components/chatbot/ChatWindow";
import ChatInput from "../../components/chatbot/ChatInput";

import { askAI } from "../../services/operations/chatbotAPI";

function AIAssistant() {
  const { token } = useAuth(); // 2. FIXED: Extracted the active auth token
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      message: "Hello 👋 Welcome to AI Smart District Assistant.\n\nHow may I help you today?",
      timestamp: "Now",
    },
  ]);

  async function sendMessage(text) {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      message: text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);

      // 3. FIXED: Passed token string signature alongside your text message string parameter
      const response = await askAI(text, token);

      // Extract the nested message text envelope based on your backend response structure
      const targetPayload = response?.data || response;

      const aiMessage = {
        id: Date.now() + 1,
        sender: "assistant",
        message: targetPayload?.reply || targetPayload?.message || "No response received.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.error("Chat session runtime error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "assistant",
          message: "Sorry, I couldn't process your request at the moment.",
          timestamp: "Now",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout title="AI Assistant">
      <div className="flex h-[82vh] flex-col rounded-3xl border bg-white shadow">
        <ChatWindow messages={messages} loading={loading} />
        <ChatInput onSend={sendMessage} />
      </div>
    </DashboardLayout>
  );
}

export default AIAssistant;
