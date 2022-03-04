import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h3>Home Page</h3>
            <Link to="/keyframes">Keyframes</Link>
            <Link to="/transforms">Transforms</Link>
        </>
    )
}

export default Home;