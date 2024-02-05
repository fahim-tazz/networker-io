// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NavBar.css"
// eslint-disable-next-line no-unused-vars
import logo from "../assets/logo_placeholder.png"
import Button from "./Button";

function NavBar() {
    // const loginButtonHandler = () => {

    // }

    return (
        <div className="container">
            {/* <img className="logo" src={logo} /> */}
            <p className="logo">Networker.io</p>

            <ul className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/guides">Guides</a></li>
                <li><a href="/about">About</a></li>
            </ul>

            <p className="loginSignup">
                <Button>Login/Signup</Button>
            </p>
        </div>

    )
}

export default NavBar;