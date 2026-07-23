function ChatMessage({
  sender,
  message,
  timestamp,
}) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[80%] gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg ${
            isUser
              ? "bg-[#0F4C81] text-white"
              : "bg-blue-100"
          }`}
        >
          {isUser ? "👤" : "🤖"}
        </div>

        {/* Message */}

        <div
          className={`rounded-2xl px-5 py-4 shadow-sm ${
            isUser
              ? "rounded-tr-md bg-[#0F4C81] text-white"
              : "rounded-tl-md border border-slate-200 bg-white text-slate-800"
          }`}
        >
          <p className="whitespace-pre-wrap leading-7">
            {message}
          </p>

          <p
            className={`mt-3 text-xs ${
              isUser
                ? "text-blue-100"
                : "text-slate-400"
            }`}
          >
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;