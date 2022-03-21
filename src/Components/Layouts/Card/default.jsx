import React from 'react';
import SocialIcons from './socialIcons';

import data from '../../../Data/cards.json';
import './default.scss';

function Card() {
    const repeatAmt = 3;
    const cards = (data.riverdale).map((person, index) => {
        return (
            <div className="card">
                <figure>
                    <img src={person.image} alt={person.name} />
                </figure>
                <h4>{person.name}</h4>
                <h5>{person.show}</h5>

                <SocialIcons links={person.social} animation="rotate" />                
            </div>
        );
    });

    return (
        <div className="grid" data-col={repeatAmt}>
            {cards}
        </div>
    )
}

export default Card;
