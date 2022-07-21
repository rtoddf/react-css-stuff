import SectionContent from '../SectionContent/default';
import menuData from '../../Data/menu.json';

function Components() {
    return <SectionContent section={menuData.components} />;
}

export default Components;