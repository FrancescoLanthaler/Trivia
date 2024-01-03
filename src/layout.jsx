import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './layout.css';

export function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to={`/`} className={({ isActive }) =>
                        isActive
                            ? "active" : ""
                    }>Play</NavLink></li>
                    <li><NavLink to={`about`} className={({ isActive }) =>
                        isActive
                            ? "active" : ""} >About</NavLink></li>
                    <li><NavLink to={`contact`} className={({ isActive }) =>
                        isActive
                            ? "active" : ""}>Contact Me</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export function Footer() {
    return (
        <footer>
            <p>&copy; 2023 Trivia Website | Designed by Francesco Lanthaler</p>
        </footer>
    );
}