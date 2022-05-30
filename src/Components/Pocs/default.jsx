import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Pocs() {
    return (
        <div className="section pocs">
            <div className="grid">
                <Header section={data.pocs} />
            </div>
        </div>
        
    )
}

export default Pocs;