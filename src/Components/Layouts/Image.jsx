import React from 'react';
import './default.scss';

function Image({src, alt, caption, credit, shape}) {
    return (
        <>
            {shape && shape === 'round' ?
                <figure>
                    <img className={shape} src={src} alt={alt ? alt : ""} />
                </figure>
                :
                <figure>
                    <span className="filler">
                        <img src={src} alt={alt ? alt : ""} />
                    </span>
                    {caption && (
                        <figcaption>{caption} {credit ? `(${credit})` : ""}</figcaption>
                    )}
                </figure>
            }
        </>
    )
}

export default Image;
