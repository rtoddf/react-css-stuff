import React from 'react';
import Menu from '../Menu/default';

function Description({ title, copy }) {
    return (
        <>
            <div className="description">
                <h3>{title}</h3>
                <p>{copy}</p>
            </div>
        </>
        
    )
}

export default Description;