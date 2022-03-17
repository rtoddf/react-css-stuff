import React from 'react';
import { Link } from 'react-router-dom';

import colton from './images/colton-haynes.jpg';

function Menu(props) {
    const { items } = props;

    const menuItems = items.map((item) => {
        return (
            <Link key={item.id} to={item.link}>
                <figure>
                    <span className="filler">
                        <img src={colton} alt={item.title} />
                    </span>
                </figure>
                <p>{item.title}</p>
            </Link>
        )
    })

    return <>{menuItems}</>;
}

export default Menu;