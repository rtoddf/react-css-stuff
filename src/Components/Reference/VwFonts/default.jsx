import React from 'react';
import Description from '../../Description';
import FillerText from '../../Common/FillerText/default';
import './default.scss';

function VwFonts() {
    const textInfo = ['rem', 'em', 'vw'];

    const textBoxes = textInfo.map((headline, index) => {
        return (
            <article key={index} >
                <h3>{headline}</h3>
                <FillerText />
            </article>
        );
    });

    return (
        <>
            <Description title="VW Fonts" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="vw-fonts">
                <div className="grid" data-col="3">
                    {textBoxes}
                </div>
            </div>
        </>
    )
}

export default VwFonts;
