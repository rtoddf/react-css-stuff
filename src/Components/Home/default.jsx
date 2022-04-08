import React from 'react';
import Menu from '../Common/Menu/default';

import data from '../../Data/menu.json';
import './default.scss';

function Home() {
    const menu = data.home.map((item, id) => {
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet.</p>
            {menu}
        </div>
    )
}

export default Home;