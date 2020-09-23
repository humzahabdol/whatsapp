import React from "react";
import "../../css/Chat/ChatFooter.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function ChatFooter() {
  return (
    <div className="chatFooter">
      <InsertEmoticonIcon />
      <form>
        <input placeholder="Type a message" type="text" />
        <button type="submit"> Send a message </button>
      </form>
      <MicIcon />
    </div>
  );
}

export default ChatFooter;
