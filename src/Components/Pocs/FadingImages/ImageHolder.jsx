import React from 'react';

function ImageHolder({ image }) {
    return (
        <figure>
            <img src={image.image} alt={image.title} />
        </figure>
    )
  }
  
  export default ImageHolder;