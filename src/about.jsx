import React from 'react';

export default function About() {
    return (
        <div className='App'>
            <h1>About</h1>
            <p>This is a trivia website made by <a href="https://www.linkedin.com/in/francesco-lanthaler-7a9728261/">Francesco Lanthaler</a>.</p>
            <p>It is made with React. The questions are fetched from <a href='https://opentdb.com/'>Open Trivia Database</a>.</p>
            <p>This website is the final project for the subject "Frontend Development" at FH Salzburg.</p>
        </div>
    );
}