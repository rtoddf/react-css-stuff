import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Apis() {
    return (
        <div className="grid">
            <Header section={data.apis} />
        </div>
    )
}

export default Apis;