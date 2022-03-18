import React, { useState } from 'react';
import './default.scss';

function SwitchAnimation() {
    const [isActive, setActive] = useState("false");

    return (
        <>
            <h3>Switch Animation</h3>
            <div className={isActive ? "time-circle" : "time-circle nite"}>
                <div className={isActive ? "sun" : "sun nite"}></div>
                <div className={isActive ? "moon" : "moon nite"}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={isActive ? "stars" : "stars nite"}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={isActive ? "water" : "water nite"}></div>
            </div>

            <div className={isActive ? "day" : "day nite"} onClick={() => setActive(!isActive)}>
                <div className="circle"></div>
            </div>
        </>
    )
}

export default SwitchAnimation;
