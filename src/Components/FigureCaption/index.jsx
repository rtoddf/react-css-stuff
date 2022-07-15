import PropTypes from 'prop-types';
import { StyledFigureCaption } from './FigureCaption.styled';

function FigureCaption({ title, copy }) {
    return (
        <StyledFigureCaption>
            <h4>{title}</h4>
            <p>{copy}</p>
        </StyledFigureCaption>
    )
}

FigureCaption.propTypes = {
    /**
     * Title text for the caption
     */
    title: PropTypes.string.isRequired,
    /**
     * Text for the caption
     */
    copy: PropTypes.string,
}

FigureCaption.defaultProps = {
    title: null,
    copy: null
}

export default FigureCaption;