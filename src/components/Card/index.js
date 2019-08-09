// use ternary condition to change the class of the picture to clicked or unclicked
// className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
import React from 'react';
import "./style.css";

function Card(props) {
 
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Address:</strong> {props.location}
            </li>
          </ul>
        </div>
        <span className="remove" onClick= {() => props.deleteFriend(props.id)} >𝘅</span>
      </div>
    );
  }
  
  export default Card;
  