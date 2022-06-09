import React from 'react';
import Description from '../../Description';
import { StyledAnimation } from './Animation.styled';

function DayNightAnimation() {
    return (
        <>
            <Description title="SASS Animations - Day/Night" />
            <StyledAnimation>
                <div className="toggle toggle--daynight">
                    <input type="checkbox" id="toggle--daynight" className="toggle--checkbox" />
                    <label className="toggle--btn" htmlFor="toggle--daynight">
                        <span className="toggle--feature"></span>
                    </label>
                </div>
            </StyledAnimation>
        </>
    )
}

export default DayNightAnimation;
