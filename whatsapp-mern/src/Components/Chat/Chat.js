import React from "react";
import "../../css/Chat/Chat.css";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

function Chat({ messages }) {
  console.log(messages);
  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatFooter />
    </div>
  );
}
export default Chat;
