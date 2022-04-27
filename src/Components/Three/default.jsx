import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Three() {
    return (
        <div className="grid">
            <Header section={data.three} />
        </div>
    )
}

export default Three;