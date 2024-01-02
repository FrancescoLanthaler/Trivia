import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

export function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={`/`}>Play</Link></li>
                    <li><Link to={`about`}>About</Link></li>
                    <li><Link to={`contact`}>Contact Me</Link></li>
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