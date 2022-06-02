import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Reference() {
    return (
        <div className="section reference">
            <div className="grid">
                <SectionContent section={data.reference} />
            </div>
        </div>
        
    )
}

export default Reference;