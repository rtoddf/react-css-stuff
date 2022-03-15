import React from 'react';
import './default.scss';

function CssPulse() {
    return (
        <>
            <h3>CSS Animations - Pulse</h3>
            <div class="grid pulse" data-col="6">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </>
    )
}

export default CssPulse;
