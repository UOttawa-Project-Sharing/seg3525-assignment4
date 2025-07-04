import React from 'react';
import { Link } from 'react-router';

export default function NavBar() {
    return (
        <nav className="navbar">
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
        <div className="nav-logo">
            {/*<img src="/logo.png" alt="Logo" className="nav-logo-img" />*/}
            <span className="nav-logo-text">MyApp</span>
        </div>
        <div className="nav-icons">
            <Link to="/search" className="nav-icon">
                <i className="bi bi-search"></i>
            </Link>
            <Link to="/basket" className="nav-icon">
                <i className="bi bi-basket"></i>
            </Link>
            <Link to="/user" className="nav-icon">
                <i className="bi bi-person"></i>
            </Link>
        </div>
        </nav>
    );
}