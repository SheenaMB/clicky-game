import React from 'react'




export default function index() {
    return (
        <div>
           {characters.map( char => (
            <Card 
            key = {char.id}
            image = {char.img}
            title = {}
            />

           ))}
            
        </div>
    )
}
