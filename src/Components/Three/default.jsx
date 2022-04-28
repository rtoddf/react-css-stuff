import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';

function Three() {
    return (
        <>
            <div className="grid">
                <Header section={data.three.lighting} />
            </div>
            <div className="grid">
                <Header section={data.three.shapes} />
            </div>
            <div className="grid">
                <Header section={data.three.tests} />
            </div>
        </>
    )
}

export default Three;