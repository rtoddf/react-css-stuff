import PropTypes from 'prop-types';
import { StyledFigure } from './Figure.styled';

function Figure({ image, alt, shape }) {
    return (
        <StyledFigure shape={shape}>
            <img src={image} alt={alt} />
        </StyledFigure>
    )
}

Figure.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    shape: PropTypes.string,
}

export default Figure;