import React, { useState } from "react";
import "../../css/Chat/ChatFooter.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios.js";
import { useParams } from "react-router-dom";

function ChatFooter() {
  const [input, setInput] = useState("");
  const { roomId } = useParams();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.length > 0) {
      var date = new Date();
      var dateString = date.toLocaleString();

      await axios.post("/messages/new", {
        message: input,
        name: "Humzah Abdol",
        timestamp: dateString,
        received: true,
        roomId: roomId,
      });
      setInput("");
    }
  };

  return (
    <div className="chatFooter">
      <InsertEmoticonIcon />
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          type="text"
        />
        <button onClick={sendMessage} type="submit">
          Send a message
        </button>
      </form>
      <MicIcon />
    </div>
  );
}

export default ChatFooter;
