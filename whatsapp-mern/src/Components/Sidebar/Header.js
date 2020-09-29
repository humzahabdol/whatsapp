import React from "react";
import "../../css/Sidebar/Header.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../../Services/StateProvider.js";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Avatar src={user?.photoURL} />
      <div className="header__right">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
