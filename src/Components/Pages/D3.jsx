import SectionContent from '../SectionContent/default';
import menuData from '../../Data/menu.json';

function D3() {
    return (
        <>
            <SectionContent section={menuData.d3.charts} />
            <SectionContent section={menuData.d3.tests} />
        </>
    )
}

export default D3;