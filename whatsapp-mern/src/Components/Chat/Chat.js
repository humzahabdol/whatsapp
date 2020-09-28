import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/Chat/Chat.css";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}
export default Chat;
