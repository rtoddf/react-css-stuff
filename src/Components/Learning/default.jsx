import Header from '../Header/default';
import data from '../../Data/menu.json';

function Learning() {
    return (
        <div className="section layouts">
            <div className="grid">
                <Header section={data.learning} />
            </div>
        </div>
    )
}

export default Learning;