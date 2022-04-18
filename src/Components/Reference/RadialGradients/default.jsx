import React from 'react';
import Description from '../../Common/Description/default';
import Circle from '../../Common/Circle/default';
import './default.scss';

function RadialGradients() {

    const gradientInfo = [
        {
            className: "gradient",
        },
        {
            className: "gradient one",
        },
        {
            className: "gradient two",
        },
        {
            className: "gradient three",
        },
        {
            className: "gradient four",
        },
    ];

    const circles = gradientInfo.map((circle, index) => {
        return <Circle key={index} classNames={circle.className} />;
      });

    return (
        <>
            <Description title="Radial Gradients" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="grid" data-col="5">
                {circles}
            </div>
        </>
    )
}

export default RadialGradients;
