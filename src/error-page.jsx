import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import { Navbar, Footer } from './layout.jsx';
import './css/layout.css';

export default function Error() {
    const error = useRouteError();

    return (
        <div>
            <Navbar />
            <div className='body'>
                <h1>Well well well!</h1>
                <p>Something's wrong, I can feel it.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <Footer />
        </div>
    );
}