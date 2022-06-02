import React, { useState } from 'react';
import Description from '../../Description';
import './default.scss';

function SwitchAnimation() {
    const [isActive, setActive] = useState("false");

    return (
        <>
            <Description title="Switch Animation" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="switch-animation">
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
            </div>
        </>
    )
}

export default SwitchAnimation;
