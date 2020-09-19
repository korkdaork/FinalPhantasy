import React from "react";
import "./style.css";


function Navbar(props) {
    const links = ["Login", "Main"];
    const navLinks = links.map(link => {
        return (
            <li><a href={"/" + link}>{link}</a><hr/></li>
        )
    });

    return (
        <nav>
            <h2 className="logo"> <a href="/">{props.logoTitle}</a></h2>
            <ul>{navLinks}</ul>
        </nav>

    )
};

export default Navbar;