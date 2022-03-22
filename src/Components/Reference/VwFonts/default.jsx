import React from 'react';
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
        <div className="vw-fonts">
            <h3>VW Fonts</h3>
            <div className="grid" data-col="3">
                {textBoxes}
            </div>
        </div>
    )
}

export default VwFonts;
