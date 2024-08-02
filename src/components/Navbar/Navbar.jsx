import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar () {
    return (
        <div>
            <div className="nav-list">
                <button className="nav-button"><Link to={"/"} className="nav-button">home</Link></button>
                <button className="nav-button"><Link to={"/About"} className="nav-button">about</Link></button>
                <button className="nav-button"><Link to={"/Experiences"} className="nav-button">experiences</Link></button>
            </div>
        </div>
    )
}

export default Navbar