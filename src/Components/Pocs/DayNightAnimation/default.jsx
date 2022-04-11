import React, { useState } from 'react';
import Description from '../../Common/Description/default';
import './default.scss';

function DayNightAnimation() {
    const [isActive, setActive] = useState("false");

    return (
        <>
            <Description title="SASS Animations - Day/Night" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="toggle toggle--daynight">
                <input type="checkbox" id="toggle--daynight" className="toggle--checkbox" />
                <label className="toggle--btn" for="toggle--daynight"><span className="toggle--feature"></span></label>
            </div>
        </>
    )
}

export default DayNightAnimation;
