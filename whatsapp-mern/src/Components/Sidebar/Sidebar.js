import React from "react";
import "../../css/Sidebar/Sidebar.css";
import Search from "./Search";
import Header from "./Header";
import ChatRooms from "./ChatRooms";

function Sidebar() {
  return (
    <div className="sidebar">
      <Header />
      <Search />
      <ChatRooms />
    </div>
  );
}

export default Sidebar;
