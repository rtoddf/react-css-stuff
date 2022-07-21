import React from 'react';
import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Pocs() {
    return <SectionContent section={data.pocs} />;
}

export default Pocs;