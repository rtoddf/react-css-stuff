import SectionContent from '../SectionContent/default';
import data from '../../Data/menu.json';

function Home() {
    return <SectionContent section={data.home} />;
}

export default Home;