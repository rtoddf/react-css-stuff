import Figure from '../Figure';
import { StyledCard } from './Card.styled';

function Card({ index, item }) {
    return (
        
            <StyledCard key={index}>
                <a href={ item.link }>
                <h4>{ item.title }</h4>
                <Figure image={`./images/${item.image}`} alt={ item.title } />
                <p>{ item.copy }</p>
                </a>
            </StyledCard>
        
        
    )
}

export default Card;