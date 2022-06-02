import React from 'react';
import Header from '../Header/default';
import data from '../../Data/menu.json';

function Gsap() {
    return (
        <div className="section reference">
            <div className="grid">
                <Header section={data.gsap} />
            </div>
        </div>
        
    )
}

export default Gsap;