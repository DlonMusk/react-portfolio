import React from "react";
import './index.css'

function Nav() {
    return (
        <nav class="container">
            <ul class="nav-links row">
                <li class="nav-link col"><a href="#home">Home</a></li>
                <li class="nav-link col"><a href="projects">Projects</a></li>
                <li class="nav-link col"><a href="contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
