import React from 'react';
import Description from '../../Common/Description/default';
import data from './data/images.json';
import './default.scss';

function SquareImages() {
    const imageSet01 = data.map((image, id) => {
        if(id < 6) {
            return (
                <article key={id} data-image-layout="square">
                    <div className="tile">
                        <figure>
                            <img src={`../images/pocs/squareimages/${image.image}`} alt={image.title} />
                        </figure>
                        <div className="content-holder">
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
                    <div className="tile">
                        <figure>
                            <img src={`../images/pocs/squareimages/${image.image}`} alt={image.title} />
                        </figure>
                        <div className="content-holder">
                            <h4>{image.title}</h4>
                        </div>
                    </div>
                </article>
            )
        }
    });

    return (
        <>
            <Description title="Square Images" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="square-images">            
                <div id="image-set01" className="grid" data-col="6" data-margin="0">
                    {imageSet01}
                </div>
                <div id="image-set02" className="grid" data-col="3" data-margin="0">
                    {imageSet02}
                </div>
            </div>
        </>
    )
}

export default SquareImages;
