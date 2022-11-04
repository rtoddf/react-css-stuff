import { NewsHome } from './NewsHomePage.styles';
import Card from './children/Card';
import New from './children/New';
import List from './children/List';

function NewsHomePage() {
    return (
        <NewsHome>
            <div className="grid-container main">
                <Card />
                <New />
            </div>
            <List />
        </NewsHome>
    )
}

export default NewsHomePage;
