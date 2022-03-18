import React, { useState } from 'react';
import './default.scss';

function DayNightAnimation() {
    const [isActive, setActive] = useState("false");

    return (
        <>
            <h3>SASS Animations - Day/Night</h3>
            <div className="toggle toggle--daynight">
                <input type="checkbox" id="toggle--daynight" className="toggle--checkbox" />
                <label className="toggle--btn" for="toggle--daynight"><span className="toggle--feature"></span></label>
            </div>
        </>
    )
}

export default DayNightAnimation;
