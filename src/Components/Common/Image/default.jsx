import React from 'react';
import './default.scss';

function Image({src, alt, shape}) {
    return (
        <figure>
            <img className={shape} src={src} alt={alt} />
        </figure>
    )
}

export default Image;
