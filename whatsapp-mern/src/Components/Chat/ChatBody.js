import React from "react";
import "../../css/Chat/ChatBody.css";
import ChatMessage from "./ChatMessage";

function ChatBody() {
  return (
    <div className="chatBody">
      <ChatMessage
        name="Humzah Abdol"
        message="This is a message brother"
        timestamp={new Date().toUTCString()}
        reciever={false}
      />
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
