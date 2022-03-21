import React from 'react';
import Image from '../../Common/Image/default';

import data from '../../../Data/panels.json';
import './default.scss';

function Panel() {
    const repeatAmt = 3;
    const panels = (data.television).map((item, id) => {
        return (
            <article key={id} className="panel">
                <h3>{item.headline}</h3>
                <figure>
                    <span className="filler">
                        <img src={item.image} alt={item.headline} />
                    </span>
                    <figcaption>{item.cpation}</figcaption>
                </figure>
                <p>{item.text}</p>           
            </article>
        );
    });

    return (
        <div className="grid" data-col={repeatAmt}>
            {panels}
        </div>
    )
}

export default Panel;
