import React from 'react';

function Description({ title, copy }) {
    return (
        <>
            {title !== '' && (
                <h3>{title}</h3>
            )}
            {copy !== '' && (
                <p>{copy}</p>
            )}
        </>
    )
}

export default Description;