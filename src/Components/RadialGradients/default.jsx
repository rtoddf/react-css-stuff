import React from 'react';
import Circle from '../Circle/default';
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
            <h3>Radial Gradietns</h3>
            <div class="grid" data-col="5">
                {circles}
            </div>
        </>
    )
}

export default RadialGradients;
