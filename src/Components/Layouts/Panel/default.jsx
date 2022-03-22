import React from 'react';
import Image from '../../Common/Image/default';
import List from './List';

import data from '../../../Data/panels.json';
import './default.scss';

function Panel() {
    const repeatAmt = 3;

    const panels = (data.television).map((item, id) => {
        return (
            <article key={id} className="panel">

                <h3>{item.panelTitle}</h3>

                <Image
                    src={item.images.main.src}
                    alt={item.images.main.caption}
                    caption={item.images.main.caption}
                    credit={item.images.main.credit}
                />

                {item.headline !== '' && ( <h4>{item.headline}</h4>  )}
                {item.text !== '' && ( <div className="body-copy"><p>{item.text}</p></div>  )}
                {item.list && ( <List listItems={item.list} />  )}

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
