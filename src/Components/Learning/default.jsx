import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Learning() {
    return (
        <div className="grid">
            <Header section={data.learning} />
        </div>
    )
}

export default Learning;