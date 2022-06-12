import { StyledFigure } from './Figure.styled';

function Figure({ image, alt, shape }) {
    return (
        <StyledFigure shape={shape}>
            <img src={image} alt={alt} />
        </StyledFigure>
    )
}

export default Figure;