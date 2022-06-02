import React, { useState } from 'react';
import Description from '../../Description';
import './default.scss';
import cubeInfo from './data/cube.json';

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
            <Description title="3-D Cube" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
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
                        <div className="toggle-switch-label">Switch dataset</div>
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
