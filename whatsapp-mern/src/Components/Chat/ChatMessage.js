import React from "react";
import "../../css/Chat/ChatMessage.css";
import { useStateValue } from "../../Services/StateProvider.js";

function ChatMessage({ message }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      <p
        className={`chatMessage ${
          message.name === user?.displayName ? "chatMessage__receiver" : ""
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
