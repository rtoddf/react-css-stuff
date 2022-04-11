import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Layouts() {
    return (
        <div className="grid">
            <Header section={data.layouts[0]} />
        </div>
    )
}

export default Layouts;