import React from "react";
import "./Navbar.css"
function Navbar(){
    return <div className="Navbar">
        <div className="leftSide">
            <a href="/movieList">Home</a>
            <a href="/">Feedback</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
        </div>
        <div className="rightSide">
            <input type="text" placeholder="Search Movie"/>
            <button>Search</button>
        </div>
    </div>
}

export default Navbar;