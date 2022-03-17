import React, { useState } from 'react';
import './default.scss';

function SwitchAnimation() {
    const [isActive, setActive] = useState("false");
    function switchAnimation(){
        document.querySelector('body').classList.toggle("night");
        setActive(!isActive);
    }

    return (
        <>
            <h3>Switch Animation</h3>
            <div className="time-circle">
                <div className="sun"></div>
                <div className="moon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stars">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="water"></div>
            </div>

            <div className={isActive ? "day" : "day nighttime"} onClick={switchAnimation}>
                <div className="circle"></div>
            </div>
        </>
    )
}

export default SwitchAnimation;
