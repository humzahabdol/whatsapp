import React, { useState, useEffect } from "react";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import "../../css/Chat/ChatHeader.css";
import axios from "../../axios.js";
import { useParams } from "react-router-dom";

function ChatHeader() {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    if (roomId) {
      axios.get(`/rooms/${roomId}`).then((response) => {
        setRoomName(response.data.name);
      });
      setSeed(Math.floor(Math.random() * 5000));
    }
  }, [roomId]);

  return (
    <div className="chatHeader">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
      ></Avatar>

      <div className="chatHeader__info">
        <h3>{roomName}</h3>
        <p>Last seen at ...</p>
      </div>

      <div className="chatHeader_headerRight">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
