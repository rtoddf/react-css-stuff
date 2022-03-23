import React from 'react';

import data from './data/images.json';
import './default.scss';

function SquareImages() {
    const imageSet01 = data.map((image, id) => {
        if(id < 6) {
            return (
                <article key={id} data-image-layout="square">
                    <div class="tile">
                        <figure>
                            <img src={`../images/pocs/squareimages/${image.image}`} alt={image.title} />
                        </figure>
                        <div class="content-holder">
                            <h4>{image.title}</h4>
                        </div>
                    </div>
                </article>
            )
        }
    });

    const imageSet02 = data.map((image, id) => {
        if(id < 3) {
            return (
                <article key={id} data-image-layout="square">
                    <div class="tile">
                        <figure>
                            <img src={`../images/pocs/squareimages/${image.image}`} alt={image.title} />
                        </figure>
                        <div class="content-holder">
                            <h4>{image.title}</h4>
                        </div>
                    </div>
                </article>
            )
        }
    });

    return (
        <div className="square-images">
            <h3>Square Images</h3>
            
            <div id="image-set01" className="grid" data-col="6" data-margin="0">
                {imageSet01}
            </div>
			<div id="image-set02" className="grid" data-col="3" data-margin="0">
                {imageSet02}
            </div>
        </div>
    )
}

export default SquareImages;
