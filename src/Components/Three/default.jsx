import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Three() {
    return (
        <div className="section threejs">
            <div className="grid">
                <SectionContent section={data.three.geometries} />
            </div>
            <div className="grid">
                <SectionContent section={data.three.lighting} />
            </div>
            <div className="grid">
                <SectionContent section={data.three.tests} />
            </div>
            {/* <div className="grid">
                <Header section={data.three.shaders} />
            </div> */}
        </div>
    )
}

export default Three;