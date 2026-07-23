function SuggestedQuestions({ onSelect }) {
  const questions = [
    "How do I register a complaint?",
    "Track my complaint status",
    "Which department handles road issues?",
    "Water supply complaint",
    "Electricity issue",
    "Garbage collection problem",
  ];

  return (
    <div className="border-b border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-sm font-semibold text-slate-500 uppercase tracking-wide">
        Quick Questions
      </h3>

      <div className="flex flex-wrap gap-3">
        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#0F4C81] hover:bg-blue-50 hover:text-[#0F4C81]"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedQuestions;