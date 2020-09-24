import React from "react";
import "../../css/Chat/ChatBody.css";
import ChatMessage from "./ChatMessage";

function ChatBody({ messages }) {
  return (
    <div className="chatBody">
      {messages.map((message) => (
        <ChatMessage message={message} />
      ))}
    </div>
  );
}

export default ChatBody;
