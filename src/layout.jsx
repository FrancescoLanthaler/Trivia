import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './layout.css';

export function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <NavThing page='/' title='Home' />
                    <NavThing page='about' title='About' />
                    <NavThing page='contact' title='Contact Me' />
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

function NavThing(props) {
    const { page, title } = props;

    return (
        <li><NavLink to={page} className={({ isActive }) =>
            isActive
                ? "active" : ""
        }>{title}</NavLink>
        </li>
    );
}