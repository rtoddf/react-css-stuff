import React from 'react';
import Box from './Box';
import './default.scss';

function Keyframes() {

    const boxInfo = [
        {
            animation: "rotate-x",
        },
        {
            animation: "rotate-x origin-top",
        },
        {
            animation: "rotate-x origin-bottom",
        },
        {
            animation: "rotate-y",
        },
        {
            animation: "rotate-y origin-left",
        },
        {
            animation: "rotate-y origin-right",
        },
        {
            animation: "rotate-z",
        },
        {
            animation: "rotate-z origin-left",
        },
        {
            animation: "rotate-z origin-right",
        },
    ];

    const boxes = boxInfo.map((box, index) => {
        return <Box key={index} animation={box.animation} />;
      });

    return (
        <div className="container">
            <h2>CSS Keyframes</h2>

            <div className="grid" data-col="3">
                {boxes}
            </div>
        </div>
    )
}

export default Keyframes;
