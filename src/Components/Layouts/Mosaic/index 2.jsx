import Description from '../../Description';

import data from './data/quotes.json';
import { StyledMosaic } from './Mosaic.styled';

function Mosaic() {
    const quotes = (data.television).map((item, id) => {
        // console.log('item: ', item);

        return <div>
            <div key={id} dangerouslySetInnerHTML={{__html: item.quote}} />
            <p className="author">-&nbsp;{item.author}</p>
        </div>
    });

    const colors = [
        {'hex': '#ae0000', 'contrast': '#fff'}, 
        {'hex': '#003264', 'contrast': '#fff'},
        {'hex': '#fae8b0', 'contrast': '#564c2e'}
    ];

    const combo = [2, 3, 3, 3, 3, 2];

    return (
        <>
            <Description title="Mosaic Display Class" />
            <StyledMosaic colors={colors} combo={combo}>
                {quotes}
            </StyledMosaic>
        </>
    )
}

export default Mosaic;
