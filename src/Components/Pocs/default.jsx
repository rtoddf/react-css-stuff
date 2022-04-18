import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Pocs() {
    return (
        <div className="grid">
            <Header section={data.pocs} />
        </div>
    )
}

export default Pocs;