import React from "react";
import { Avatar } from "@material-ui/core";
import "../../css/Sidebar/SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
