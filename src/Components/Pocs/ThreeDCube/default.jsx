import React, { useState } from 'react';
import './default.scss';
import cubeInfo from '../../../Data/cube.json';

function ThreeDCube() {
    const [images, setImages] = useState(true);
    const [backFaceInvisible, setBackFaceInvisible] = useState(false);
    const [side, setSide] = useState('show-one');

    const cubeSides = cubeInfo.map((side, index) => {
        if(images) {
            return <figure key={index} className={side.side}>
                <img src={side.image} alt={side.alt} />
            </figure>;
        }
        return <figure key={index} className={side.side}>{index + 1}</figure>;
    });

    const buttons = cubeInfo.map((side, index) => {
        return <button
            key={index}
            className={`show-${side.side}`}
            onClick={() => setSide(`show-${side.side}`)}
        >
            {images ? side.alt : `Show ${index + 1}`}
        </button>;
    });

    return (
        <>
            <h3>3-D Cube</h3>
            <div className='grid three-d-cube'>
                <article className="cube-container">
                    <div className={`cube ${side} ${backFaceInvisible ? 'panels-backface-invisible' : ''}`}>
                        {cubeSides}
                    </div>
                </article>

                <article className='options'>
                    {buttons}
                    <div>
                        <button onClick={() => setBackFaceInvisible(!backFaceInvisible)}>
                            Toggle Backface Visibility
                        </button>
                        <button onClick={() => setImages(!images)}>
                            Hide/Show Images
                        </button>
                    </div>
                </article>
            </div>
        </>
    )
}

export default ThreeDCube;
