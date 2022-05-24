import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Layouts() {
    return (
        <div className="section layouts">
            <div className="grid">
                <Header section={data.layouts} />
            </div>
        </div>
        
    )
}

export default Layouts;