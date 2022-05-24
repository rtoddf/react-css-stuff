import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Apis() {
    return (
        <div className="section apis">
            <div className="grid">
                <Header section={data.apis} />
            </div>
        </div>
    )
}

export default Apis;