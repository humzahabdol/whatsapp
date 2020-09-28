import React, { useState, useEffect } from "react";
import "../../css/Sidebar/ChatRooms.css";
import SidebarChat from "./SidebarChat";
import Pusher from "pusher-js";
import axios from "../../axios";

function ChatRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("/rooms/sync").then((response) => {
      setRooms(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("5a0b22b08a77399c562f", {
      cluster: "us3",
    });

    const channel = pusher.subscribe("rooms");
    channel.bind("inserted", function (newRoom) {
      setRooms([...rooms, newRoom]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [rooms]);

  return (
    <div className="chatRooms">
      <SidebarChat addNewChat />
      {rooms.map((room) => (
        <SidebarChat key={room._id} id={room._id} name={room.name} />
      ))}
    </div>
  );
}

export default ChatRooms;
