import React from "react";

export default function index(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Clicky Game
        </a>
      <div>Score: {props.score2}</div>
      </nav>
    </div>
  );
}
