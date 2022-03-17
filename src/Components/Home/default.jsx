import React from 'react';
import Menu from './Menu';

import data from '../../Data/home.json';
import './default.scss';

function Home() {
    const menu = data.map((item, id) => {
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

export default Home;