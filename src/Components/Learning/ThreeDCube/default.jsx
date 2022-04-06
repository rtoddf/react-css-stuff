import React from 'react';
import Circle from '../../Common/Circle/default';
import './default.scss';

function ThreeDCube() {
    const repeatAmt = 6
    return (
        <>
            <h3>CSS Animations - Pulse</h3>
            <div className="grid pulse" data-col={repeatAmt}>
                {[...Array(repeatAmt)].map((el, index) => (
                    <Circle classNames='small' />
                ))}
            </div>
        </>
    )
}

export default ThreeDCube;
