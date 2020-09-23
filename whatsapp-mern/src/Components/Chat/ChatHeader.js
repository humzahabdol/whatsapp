import React from "react";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import "../../css/Chat/ChatHeader.css";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <Avatar></Avatar>

      <div className="chatHeader__info">
        <h3>Room Name</h3>
        <p>last seen</p>
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
