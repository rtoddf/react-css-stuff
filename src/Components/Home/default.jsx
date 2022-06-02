import Header from '../Header/default';
import data from '../../Data/menu.json';
// import './default.scss';

function Home() {
    return (
        <div className="section">
            <div className="grid">
                <Header section={data.home} />
            </div>
        </div>
        
    )
}

export default Home;