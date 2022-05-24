import React from 'react';
import PanelSection from '../../Layouts/PanelSection/default';

function Menu({ items }) {
    const menuItems = items.map((item, index) => {
        return (
            <PanelSection key={index} item={item} />
        )
    })

    return (
        <div className="grid menu" data-col="4">
            {menuItems}
        </div>
    )
}

export default Menu;