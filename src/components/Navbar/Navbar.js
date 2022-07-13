import React from "react";
import {NavLink} from "react-router-dom";
import "./navbar.css"
export default function Navbar() {
    return(
            <ul className="Navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Forum">Forum</NavLink>
                <NavLink to="/Team">Team</NavLink>
                <NavLink to="/Works">Works</NavLink>
                <NavLink to="/Tasks">Tasks</NavLink>
                <NavLink to="/Learn">Learn</NavLink>
            </ul>
    )
}