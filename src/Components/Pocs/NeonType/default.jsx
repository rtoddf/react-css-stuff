import React from 'react';
import Description from '../../Common/Description/default';
import styled from 'styled-components';
import './default.scss';

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
            <Description title="CSS Neon Type" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="grid neon-type">
                <Frame className="frame"><Text>{color}</Text></Frame>
            </div>
        </>
    )
}

export default NeonType;
