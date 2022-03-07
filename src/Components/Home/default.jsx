import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h3>Home Page</h3>
            <ul>
                <li><Link to="/keyframes">Keyframes</Link></li>
                <li><Link to="/transforms">Transforms</Link></li>
                <li><Link to="/radial-gradients">Radial Gradients</Link></li>
            </ul>
        </>
    )
}

export default Home;