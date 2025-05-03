import React from "react";
import './navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="logo">EcoDicas</div>
            <ul className="nav-links">
                <li><a href="#">Início</a></li>
                <li><a href="#">Dicas</a></li>
                <li><a href="#">Sobre nós</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;