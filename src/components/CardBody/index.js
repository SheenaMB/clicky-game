import React from 'react'
import Card from "../Card";
import "./style.css";

export default function index({characters}) {
    return (
        <div className = "cardBody">
           {characters.map( char => (
            <Card 
            key = {char.id}
            image = {char.image}
            name = {char.name}
            />
           ))}
            
        </div>
    )
}
