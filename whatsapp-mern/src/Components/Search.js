import React from "react";
import "../css/Search.css";
import { SearchOutlined } from "@material-ui/icons";

function Search() {
  return (
    <div className="search">
      <div className="search__container">
        <SearchOutlined />
        <input placeholder="Search or start new chat" type="text" />
      </div>
    </div>
  );
}

export default Search;
