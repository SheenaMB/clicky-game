import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Clicky Game
        </a>
      
      <div>
        Game Status
      </div>
      
      <div>Score: {props.score2}</div>
      </nav>
    </div>
  );
}
