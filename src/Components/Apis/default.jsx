import React from 'react';
import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Apis() {
    return (
        <div className="section apis">
            <div className="grid">
                <SectionContent section={data.apis} />
            </div>
        </div>
    )
}

export default Apis;