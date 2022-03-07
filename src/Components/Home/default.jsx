import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h3>CSS Reference</h3>
            <ul>
                <li><Link to="/keyframes">Keyframes</Link></li>
                <li><Link to="/transforms">Transforms</Link></li>
                <li><Link to="/radial-gradients">Radial Gradients</Link></li>
                <li><Link to="/dropshadows">Dropshadows</Link></li>
                <li><Link to="/nth-child">Nth Child</Link></li>
            </ul>
        </>
    )
}

export default Home;