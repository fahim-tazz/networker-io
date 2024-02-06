import React from "react";
import "./Card.css"
import fahimImg from "../assets/Fahim.JPG";

export default function Card({ person }) {
    return (
        <div className="card">
            <img src={fahimImg} alt="" className="image" />
            <div className="name">
                {/* <p>Name:</p> */}
                <p>{person.name}</p>
            </div>
            <div className="title">
                {/* <p>Title:</p> */}
                <p>{person.position},<br />{person.company}</p>
            </div>
            <div className="convo">
                {/* <p>Last Update:</p> */}
                <p>{person.lastMsg}</p>
            </div>
            <div className="reminder">
                {/* <p>Reminder:</p> */}
                <p>{person.reminderFreq}</p>
            </div>
        </div>
    )
}