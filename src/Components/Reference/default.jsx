import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Reference() {
    return (
        <div className="grid">
            <Header section={data.reference[0]} />
        </div>
    )
}

export default Reference;