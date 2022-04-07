import React, { useState } from 'react';
import './default.scss';
import cubeInfo from '../../../Data/cube.json';

function ThreeDCube() {
    const [dataSet, setDataSet] = useState('set01');
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
                    <div className="side-options">
                        {buttons}
                    </div>
                    
                    <div className="display-options">
                        <button onClick={() => setImages(!images)}>
                            Hide/Show Images
                        </button>
                        <button className={`${images ? 'hidden' : ''}`} onClick={() => setBackFaceInvisible(!backFaceInvisible)}>
                            Toggle Backface Visibility
                        </button>
                    </div>

                    <div className="toggle-options">
                        <div class="toggle-switch-label">Switch dataset</div>
                        <label className="switch">
                            
                            <input type="checkbox" onClick={() => setDataSet(dataSet === 'set01' ? 'set02' : 'set01')} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    
                </article>
            </div>
        </>
    )
}

export default ThreeDCube;
