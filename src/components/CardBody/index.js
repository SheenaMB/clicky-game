import React from 'react'
import Card from "../Card";
import "./style.css";

export default function index(props) {
    return (
        <div className = "cardBody">
           {props.characters.map( char => (
            <Card 
            key = {char.id}
            image = {char.image}
            handleIncrement={props.handleIncrement}
            />
           ))}
            
        </div>
    )
}
