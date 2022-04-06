import React, { useState } from 'react';
import './default.scss';
import cubeInfo from '../../../Data/cube.json';

function ThreeDCube() {
    const [dataSet, setDataSet] = useState('set02');
    const [images, setImages] = useState(true);
    const [backFaceInvisible, setBackFaceInvisible] = useState(false);
    const [side, setSide] = useState('show-front');

    const set = cubeInfo[dataSet];

    const cubeSides = set.map((side, index) => {
        return <>
            <figure key={index} className={`side-${side.label}`}>
                {images ? <img src={side.image} alt={side.alt} /> : side.label}
                {/* <h4>Name</h4> */}
            </figure>
        </>;
    });

    const buttons = set.map((side, index) => {
        return <button
            key={index}
            onClick={() => setSide(`show-${side.label}`)}
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
