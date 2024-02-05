import React from "react";
import "./Button.css";

export default function Button({ onClick }) {
    return (
        <>
            <button className="button" onClick={onClick}>
                Login
            </button>
            <button className="button" onClick={onClick}>
                Signup
            </button>
        </>
    )
}