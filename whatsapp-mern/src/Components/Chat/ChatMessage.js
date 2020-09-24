import React from "react";
import "../../css/Chat/ChatMessage.css";

function ChatMessage(props) {
  return (
    <div>
      <p
        className={`chatMessage ${
          props.receiver ? "chatMessage__reciever" : ""
        }`}
      >
        <span className="chatMessage__name">{props.name}</span>
        {props.message}
        <span className="chatMessage__timestamp">{props.timestamp}</span>
      </p>
    </div>
  );
}

export default ChatMessage;
