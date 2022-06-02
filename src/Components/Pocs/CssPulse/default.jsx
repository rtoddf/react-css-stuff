import React from 'react';
import Description from '../../Description';
import Circle from '../../Reference/Circle';
import './default.scss';

function CssPulse() {
    const repeatAmt = 6
    return (
        <>
            <Description title="CSS Animations - Pulse" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="grid pulse" data-col={repeatAmt}>
                {[...Array(repeatAmt)].map((el, index) => (
                    <Circle classNames='small' />
                ))}
            </div>
        </>
    )
}

export default CssPulse;
