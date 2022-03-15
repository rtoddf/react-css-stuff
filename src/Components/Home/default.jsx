import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h3>POCs</h3>
            <ul>
                <li><Link to="/pocs/svg-doughnut">SVG Doughnut</Link></li>
            </ul>
            
            <h3>CSS Reference</h3>
            <ul>
                <li><Link to="/reference/nth-child">Nth Child</Link></li>
                <li><Link to="/reference/vw-fonts">VW Fonts</Link></li>
                <li><Link to="/reference/selectors">Selectors</Link></li>
                <li><Link to="/reference/radial-gradients">Radial Gradients</Link></li>
                <li><Link to="/reference/dropshadows">Dropshadows</Link></li>
                <li><Link to="/reference/transforms">Transforms</Link></li>
                <li><Link to="/reference/keyframes">Keyframes</Link></li>
            </ul>
        </>
    )
}

export default Home;