import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Reference() {
    return (
        <div className="section reference">
            <div className="grid">
                <Header section={data.reference} />
            </div>
        </div>
        
    )
}

export default Reference;