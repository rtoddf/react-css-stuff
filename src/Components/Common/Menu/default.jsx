import React from 'react';
import { Link } from 'react-router-dom';

import CardSection from '../../Layouts/CardSection/default';

function Menu({ items }) {
    const menuItems = items.map((item) => {
        return (
            <CardSection item={item} />
            // <Link key={item.id} to={item.link}>
            //     <figure>
            //         <span className="filler">
            //             <img src={`./images/${item.image}`} alt={item.title} />
            //         </span>
            //     </figure>
            //     <p>{item.title}</p>
            // </Link>
        )
    })

    return (
        <div className="grid menu" data-col="4">
            {menuItems}
        </div>
    )
}

export default Menu;