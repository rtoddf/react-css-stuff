import React from 'react';

function Description({ title, copy }) {
    return (
        <>
            <div className="description">
                {title !== '' && (
                    <h3>{title}</h3>
                )}
                {copy !== '' && (
                    <p>{copy}</p>
                )}
            </div>
        </>
        
    )
}

export default Description;