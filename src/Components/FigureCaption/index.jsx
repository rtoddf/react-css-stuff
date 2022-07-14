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
    title: PropTypes.string,
}

FigureCaption.defaultProps = {
    title: 'Andrew Garfield',
    copy: 'this is the copy'
}

export default FigureCaption;