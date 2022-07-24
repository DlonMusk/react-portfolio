import React from "react";
import './index.css'

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="nav p-0 container-fluid">
            <ul className="nav-links">
                <li className="nav-item"><a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href="#home" onClick={() => handlePageChange('Home')}>Home</a></li>
                <li className="nav-item"><a className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} href="#projects" onClick={() => handlePageChange('Projects')}>Projects</a></li>
                <li className="nav-item"><a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;