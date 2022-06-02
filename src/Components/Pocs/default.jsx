import React from 'react';
import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Pocs() {
    return (
        <div className="section pocs">
            <div className="grid">
                <SectionContent section={data.pocs} />
            </div>
        </div>
        
    )
}

export default Pocs;