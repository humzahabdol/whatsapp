import React from "react";
import "../../css/Chat/ChatMessage.css";

function ChatMessage({ message }) {
  return (
    <div>
      <p
        className={`chatMessage ${
          message.received ? "chatMessage__receiver" : ""
        }`}
      >
        <span className="chatMessage__name">{message.name}</span>
        {message.message}
        <span className="chatMessage__timestamp">{message.timestamp}</span>
      </p>
    </div>
  );
}

export default ChatMessage;
