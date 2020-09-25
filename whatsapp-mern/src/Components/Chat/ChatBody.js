import React, { useEffect, useState } from "react";
import "../../css/Chat/ChatBody.css";
import ChatMessage from "./ChatMessage";
import Pusher from "pusher-js";
import axios from "../../axios";

function ChatBody() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("45269330fa99db0ee296", {
      cluster: "us3",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="chatBody">
      {messages.map((message) => (
        <ChatMessage message={message} />
      ))}
    </div>
  );
}

export default ChatBody;
