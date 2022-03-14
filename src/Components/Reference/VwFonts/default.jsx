import React from 'react';
import FillerText from '../FillerText/default';
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
            <h3>VW Fonts</h3>
            <div class="grid" data-col="3">
                {textBoxes}
            </div>
        </>
        
    )
}

export default VwFonts;
