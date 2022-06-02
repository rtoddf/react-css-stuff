import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Layouts() {
    return (
        <div className="section layouts">
            <div className="grid">
                <SectionContent section={data.layouts} />
            </div>
        </div>
        
    )
}

export default Layouts;