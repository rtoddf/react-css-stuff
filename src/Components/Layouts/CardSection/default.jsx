import React from 'react';
// import Description from '../../Common/Description/default';
// import Image from '../../Common/Image/default';

import './default.scss';

function CardSection({item}) {
    console.log('item: ', item)

    return (
        <>
            <a href={ item.link }>
                <article class="panel">
                    <h3>{ item.title }</h3>
                    <figure>
                        <span class="filler">
                            <img src={`./images/${item.image}`} alt={ item.title } />
                        </span>
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus convallis diam sit amet convallis. Morbi vel nunc lectus. Phasellus viverra egestas nulla nec sollicitudin.</p>
                </article>
            </a>
        </>
    )
}

export default CardSection;
