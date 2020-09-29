import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "../../css/Sidebar/SidebarChat.css";
import axios from "./../../axios.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [messages, setMessages] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`/messages/${id}`).then((response) => {
        setMessages(response.data);
      });
    }
  }, [roomId]);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      axios.post("/rooms/new", {
        name: roomName,
      });
    }
  };
  console.log(messages);
  console.log(roomId);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[messages.length - 1]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
