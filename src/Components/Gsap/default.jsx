import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Gsap() {
    return (
        <div className="section reference">
            <div className="grid">
                <SectionContent section={data.gsap} />
            </div>
        </div>
        
    )
}

export default Gsap;