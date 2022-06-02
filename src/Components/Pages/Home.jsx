import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Home() {
    return (
        <div className="section">
            <SectionContent section={data.home} />
        </div>
    )
}

export default Home;