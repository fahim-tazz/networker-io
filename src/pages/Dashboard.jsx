import React from "react";
import "./Dashboard.css";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Dashboard() {
    const samplePerson = {
        name: "Fahim Tajwar",
        position: "Software Engineering Intern",
        company: "Merck Software Development Group",
        lastMsg: "How are you doing?!",
        reminderFreq: "Every 1 month"
    }
    return (
        <div>
            <NavBar />
            <h1 className="heading">
                My Network
            </h1>
            <div className="content">
                <div className="controlBar">
                    <div className="controlBarLeft">
                        <Button className="addButton">+Add</Button>
                    </div>
                    <div className="controlBarRight">
                        <Button className="filterButton">Filter</Button>
                        <Button className="sortButton">Sort By</Button>
                    </div>
                </div>
                <div className="list">
                    <Header></Header>
                    <Card person={samplePerson}></Card>
                    <Card person={samplePerson}></Card>
                    <Card person={samplePerson}></Card>
                    <Card person={samplePerson}></Card>
                    <Card person={samplePerson}></Card>
                </div>
            </div>
        </div>
    )
}