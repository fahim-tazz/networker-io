import React from "react";
import "./Dashboard.css";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Dashboard() {
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
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}