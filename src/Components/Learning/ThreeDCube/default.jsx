import React, { useState } from 'react';
import './default.scss';

function ThreeDCube() {
    const [backFaceInvisible, setBackFaceInvisible] = useState(false);
    const [side, setSide] = useState('show-front');

    const cubeInfo = ['front', 'back', 'right', 'left', 'top', 'bottom'];

    const cubeSides = cubeInfo.map((side, index) => {
        return <figure key={index} className={side}>{index + 1}</figure>;
    });

    const buttons = cubeInfo.map((side, index) => {
        return <button
            key={index}
            className={`show-${side}`}
            onClick={() => setSide(`show-${side}`)}
        >
            {`Show ${index + 1}`}
        </button>;
    });

    return (
        <>
            <h3>Learning - 3-D Cube</h3>
            <div className='grid three-d-cube'>
                <article className="cube-container">
                    <div className={`cube ${side} ${backFaceInvisible ? 'panels-backface-invisible' : ''}`}>
                        {cubeSides}
                    </div>
                </article>

                <article className='options'>
                    {buttons}
                    <button onClick={() => setBackFaceInvisible(!backFaceInvisible)}>
                        Toggle Backface Visibility
                    </button>
                </article>
            </div>
        </>
    )
}

export default ThreeDCube;
