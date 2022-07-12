import React from "react";
import {NavLink} from "react-router-dom";
export default function Navbar() {
    return(
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Forum">Forum</NavLink></li>
                <li><NavLink to="/Team">Team</NavLink></li>
                <li><NavLink to="/Works">Works</NavLink></li>
                <li><NavLink to="/Tasks">Tasks</NavLink></li>
                <li><NavLink to="/Learn">Learn</NavLink></li>
            </ul>
        </div>
    )
}