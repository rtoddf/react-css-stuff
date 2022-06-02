import Figure from '../Figure';
import { StyledCard } from './Card.styled';

function Card({ index, item }) {
    return (
        <a href={ item.link }>
            <StyledCard key={index}>
                <h4>{ item.title }</h4>
                <Figure image={`./images/${item.image}`} alt={ item.title } />
                <p>{ item.copy }</p>
            </StyledCard>
        </a>
        
    )
}

export default Card;