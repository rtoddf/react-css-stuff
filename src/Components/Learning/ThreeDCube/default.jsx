import React, { useState } from 'react';

import './default.scss';

function ThreeDCube() {
    const [backFaceInvisible, setbackFaceInvisible] = useState(false);
    const cubeInfo = ['front', 'back', 'right', 'left', 'top', 'bottom'];

    const cubeSides = cubeInfo.map((side, index) => {
        return <figure key={index} className={side}>{index + 1}</figure>;
    });

    function sayHello() {
        console.log('Hello!');
    }

    const buttons = cubeInfo.map((side, index) => {
        return <button key={index} className={`show-${side}`} onClick={() => sayHello()}>{`Show ${index + 1}`}</button>;
    });

    return (
        <>
            <h3>Learning - 3-D Cube</h3>
            <div className='grid three-d-cube'>
                <article className="cube-container">
                    <div id='cube' className={`show-front ${backFaceInvisible ? 'panels-backface-invisible' : ''}`}>
                        {cubeSides}
                    </div>
                </article>

                <article className='options'>
                    <p id='show-buttons'>
                        {buttons}
                    </p>

                    <p>
                        <button onClick={() => setbackFaceInvisible(!backFaceInvisible)}>
                            Toggle Backface Visibility
                        </button>
                    </p>
                </article>
            </div>
        </>
    )
}

export default ThreeDCube;
