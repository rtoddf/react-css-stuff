import SectionContent from '../SectionContent/default';
import menuData from '../../Data/menu.json';

function Three() {
    return (
        <>
            <SectionContent section={menuData.three.geometries} />
            <SectionContent section={menuData.three.lighting} />
            <SectionContent section={menuData.three.tests} />
            {/* <Header section={data.three.shaders} /> */}
        </>
    )
}

export default Three;