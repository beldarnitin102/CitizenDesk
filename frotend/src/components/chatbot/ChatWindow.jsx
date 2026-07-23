import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

function ChatWindow({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-8">

      <div className="mx-auto max-w-4xl space-y-6">

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            sender={message.sender}
            message={message.message}
            timestamp={message.timestamp}
          />
        ))}

        {loading && (
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              🤖
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 shadow">
              <div className="flex gap-2">

                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></span>

                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:.2s]"></span>

                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:.4s]"></span>

              </div>
            </div>

          </div>
        )}

        <div ref={bottomRef}></div>

      </div>

    </div>
  );
}

export default ChatWindow;