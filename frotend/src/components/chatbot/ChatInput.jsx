import { useState } from "react";
import SuggestedQuestions from "./SuggestedQuestions";

function ChatInput({ onSend }) {

  const [message, setMessage] = useState("");

  function send() {

    if (!message.trim()) return;

    onSend(message);

    setMessage("");

  }

  function handleKeyDown(e) {

    if (e.key === "Enter" && !e.shiftKey) {

      e.preventDefault();

      send();

    }

  }

  return (
    <>

      <SuggestedQuestions
        onSelect={setMessage}
      />

      <div className="border-t bg-white p-5">

        <div className="flex gap-4">

          <textarea
            rows={2}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask AI anything..."
            className="flex-1 resize-none rounded-2xl border px-5 py-4 outline-none focus:border-[#0F4C81]"
          />

          <button
            onClick={send}
            className="rounded-2xl bg-[#0F4C81] px-8 text-white transition hover:bg-[#0d3f69]"
          >
            Send
          </button>

        </div>

      </div>

    </>
  );
}

export default ChatInput;