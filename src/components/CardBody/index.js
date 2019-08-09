import React from 'react'

export default function index({characters}) {
    return (
        <div>
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
