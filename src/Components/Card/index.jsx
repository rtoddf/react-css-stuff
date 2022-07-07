import Figure from '../Figure';
import { StyledCard } from './Card.styled';

function Card({ title, img, imgSrc, imgShape, copy, link, linkTarget }) {
    return (
        
            <StyledCard>
                <a href={ link } target={linkTarget ? linkTarget : '_self'} rel="noreferrer">
                    <h4>{ title }</h4>
                    <Figure image={imgSrc === `external` ? img : `./images/${img}`} alt={ title } />
                    <p>{ copy }</p>
                </a>
            </StyledCard>
        
        
    )
}

export default Card;