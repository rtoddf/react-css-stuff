import React from 'react';
import Circle from '../../Common/Circle/default';
import './default.scss';

function DropShadows() {

    const gradientInfo = [
        {
            className: "dropshadow",
        },
        {
            className: "dropshadow",
        },
        {
            className: "dropshadow",
        },
        {
            className: "dropshadow",
        },
        {
            className: "dropshadow",
        },
    ];

    const circles = gradientInfo.map((circle, index) => {
        return <Circle key={index} classNames={circle.className} />;
      });

    return (
        <>
            <h3>Dropshadows</h3>
            <div className="grid" data-col="5">
                {circles}
            </div>
        </>
    )
}

export default DropShadows;
