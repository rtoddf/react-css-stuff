import React from 'react';
import styled from 'styled-components';
import './default.scss';
import '../../../styles/_colors.scss';

function NeonType() {
    const color = 'color';

    const Frame = styled.div`
        display: inline-block;
        margin: 3.75rem;
        padding: 1.25rem 2.5rem;
        background-color: $gray-color-3;
        border: 10px double $blue-green-color;
        border-radius: 20px;
        animation: neon-box 1.5s ease-in-out infinite alternate;
        text-align: center;
    `;

    const Text = styled.p`
        margin-bottom: 0;
        padding: 2.5rem;
        color: $white-color;
        font-family: Audiowide;
        font-size: 7em;
        text-transform: uppercase;
        letter-spacing: 2rem;
        animation: neon-text 1.5s ease-in-out infinite alternate;
    `;

    return (
        <>
            <h3>CSS Neon Type</h3>
            <div className="grid neon-type">
                <Frame className="frame"><Text>{color}</Text></Frame>
            </div>
        </>
    )
}

export default NeonType;
