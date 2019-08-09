import React from 'react';
import Navbar from "./Navbar/index";

export default function index(props) {
    return (
        <div>
            <Navbar score2 = {props.score} />
        </div>
    )
}
