import React from "react";
import "../../css/Sidebar/ChatRooms.css";
import SidebarChat from "./SidebarChat";

function ChatRooms() {
  return (
    <div className="chatRooms">
      <SidebarChat addNewChat />
      <SidebarChat />
      <SidebarChat />
    </div>
  );
}

export default ChatRooms;
