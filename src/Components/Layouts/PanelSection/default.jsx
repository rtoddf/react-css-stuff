import React from 'react';
// import Description from '../../Common/Description/default';
// import Image from '../../Common/Image/default';

import './default.scss';

function PanelSection({item}) {
    // console.log('item: ', item)

    return (
        <>
            <a href={ item.link }>
                <article className="panel">
                    <h4>{ item.title }</h4>
                    <figure>
                        <span className="filler">
                            <img src={`./images/${item.image}`} alt={ item.title } />
                        </span>
                    </figure>
                    <p>{ item.copy }</p>
                </article>
            </a>
        </>
    )
}

export default PanelSection;
