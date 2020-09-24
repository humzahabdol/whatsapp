import React from "react";
import "../../css/Chat/ChatBody.css";
import ChatMessage from "./ChatMessage";

function ChatBody({ messages }) {
  console.log(messages);
  return (
    <div className="chatBody">
      {messages.map((message) => (
        <ChatMessage
          name={message.name}
          message={message.message}
          timestamp={message.timestamp}
          receiver={message.received}
        />
      ))}

      <ChatMessage
        name="Zahiyah M"
        message="it works"
        timestamp={new Date().toUTCString()}
        reciever={true}
      />
    </div>
  );
}

export default ChatBody;
