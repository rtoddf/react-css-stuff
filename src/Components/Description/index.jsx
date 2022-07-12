import PropTypes from 'prop-types';
import { StyledDescription } from './Description.styled';

function Description({ title, copy }) {
    return (
        <StyledDescription>
            {title !== '' && (
                <h3>{title}</h3>
            )}
            {copy !== '' && (
                <p>{copy}</p>
            )}
        </StyledDescription>
    )
}

Description.propTypes = {
    title: PropTypes.string,
    copy: PropTypes.string,
}

export default Description;