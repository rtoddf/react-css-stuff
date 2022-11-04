import Card from './children/Card';
import New from './children/New';
import List from './children/List';

import { NewsHome } from './NewsHomePage.styles';

function NewsHomePage() {
    return (
        <>
            <NewsHome>
                <Card />
                <New />
            </NewsHome>
            <List />
        </>
    )
}

export default NewsHomePage;
