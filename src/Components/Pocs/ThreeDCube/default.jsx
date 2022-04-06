import React, { useState } from 'react';
import './default.scss';
import cubeInfo from '../../../Data/cube.json';

function ThreeDCube() {
    const [images, setImages] = useState(true);
    const [backFaceInvisible, setBackFaceInvisible] = useState(false);
    const [side, setSide] = useState('show-1');

    const cubeSides = cubeInfo.map((side, index) => {
        const whichSide = index + 1;
        return <figure key={index} className={`side-${whichSide}`}>
            {images ? <img src={side.image} alt={side.alt} /> : side.label}
        </figure>;
    });

    const buttons = cubeInfo.map((side, index) => {
        const whichButton = index + 1;
        return <button
            key={index}
            className={`side-${index + 1}`}
            onClick={() => setSide(`show-${whichButton}`)}
        >
            {images ? side.alt : side.label}
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
                        <button onClick={() => setImages(!images)}>
                            Hide/Show Images
                        </button>
                        <button className={`${images ? 'hidden' : ''}`} onClick={() => setBackFaceInvisible(!backFaceInvisible)}>
                            Toggle Backface Visibility
                        </button>
                    </div>
                </article>
            </div>
        </>
    )
}

export default ThreeDCube;
