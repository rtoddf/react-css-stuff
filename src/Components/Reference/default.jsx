import React from 'react';
import Menu from '../Common/Menu/default';

import data from '../../Data/menu.json';

function Reference() {
    const menu = data.reference.map((item, id) => {
        return (
            <div key={id}>
                <h3>{item.headline}</h3>
                <div className="grid" data-col="4">
                    <Menu items={item.items} />
                </div>
            </div>
        )
    })

    return (
        <div className="grid">
            {menu}
        </div>
    )
}

export default Reference;