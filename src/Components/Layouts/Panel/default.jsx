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

                <Image
                    src={item.images.main.src}
                    alt={item.images.main.caption}
                    caption={item.images.main.caption}
                    credit={item.images.main.credit}
                />

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
