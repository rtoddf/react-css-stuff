import React from 'react';
import Icon from '../../Common/Icon/default';
import './default.scss';

function Card() {
    const repeatAmt = 3

    const socialIcons = [
        "fab fa-facebook-f", 
        "fab fa-twitter",
        "fas fa-share", 
        "fas fa-thumbs-up"
    ]
    return (
        <div className="grid" data-col={repeatAmt}>
            <div className="card">
                <figure>
                    <img src="../images/layouts/card/kj-apa.jpg" alt="KJ Apa" />
                </figure>
                <h4>KJ Apa</h4>
                <h5>Riverdale</h5>

                {socialIcons.map((iconClass, id) => {
                    console.log('iconClass: ', iconClass)
                    return (
                        <Icon key={id} iconClass={iconClass} animation="rotate"  />
                    )
                })}
            </div>
        </div>
    )
}

export default Card;
