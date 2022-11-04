import { NewsHome } from './NewsHomePage.styles';
import Card from './Card';
import New from './New';

function NewsHomePage() {
    return (
        <NewsHome>
            <div className="grid-container main">
                <Card />
                <New />
            </div>
        </NewsHome>
    )
}

export default NewsHomePage;
