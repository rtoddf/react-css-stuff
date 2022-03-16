import React from 'react';
import Circle from '../../Reference/Circle/default';
import './default.scss';

function CssPulse() {
    const colTotal = 6
    return (
        <>
            <h3>CSS Animations - Pulse</h3>
            <div class="grid pulse" data-col={colTotal}>
                {[...Array(colTotal)].map((el, index) => (
                    <Circle classNames='small' />
                ))}
            </div>
        </>
    )
}

export default CssPulse;
