import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Learning() {
    return (
        <div className="section layouts">
            <div className="grid">
                <SectionContent section={data.learning} />
            </div>
        </div>
    )
}

export default Learning;