import { useState } from 'react';
import Description from '../../Description';
import { StyledSwitch } from './Switch.styled';

function SwitchAnimation() {
    const [isActive, setActive] = useState("false");

    return (
        <>
            <Description title="Switch Animation" />
            <StyledSwitch>
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
            </StyledSwitch>
        </>
    )
}

export default SwitchAnimation;
