import React from 'react';

import './default.scss';

function ThreeDCube() {
    const cubeInfo = ["front", "back", "right", "left", "top", "bottom"];

    const cubeSides = cubeInfo.map((side, index) => {
        return <figure key={index} className={side}>{index + 1}</figure>;
    });

    const buttons = cubeInfo.map((side, index) => {
        return <button key={index} className={`show-${side}`}>{`Show ${index + 1}`}</button>;
    });

    // const box = document.querySelector('#cube');
    // const panelClassName = 'show-front';
    // const buttons = document.querySelector('#show-buttons');

    return (
        <>
            <h3>Learning - 3-D Cube</h3>
            <div className="grid three-d-cube">
                {/* {[...Array(repeatAmt)].map((el, index) => (
                    <Circle classNames='small' />
                ))} */}

                <article className="cube-container">
                    <div id="cube" className="show-front">
                        {cubeSides}
                    </div>
                </article>

                <article className="options">
                    <p id="show-buttons">
                        {buttons}
                    </p>

                    <p>
                        <button id="toggle-backface-visibility">Toggle Backface Visibility</button>
                    </p>
                </article>
            </div>
        </>
    )
}

export default ThreeDCube;
