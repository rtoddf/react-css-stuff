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

Description.defaultProps = {
    title: 'This is the title',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet neque sapien. Vivamus efficitur, lacus a hendrerit iaculis, lectus dolor laoreet justo, eget iaculis orci nisi eget turpis. Pellentesque eget eros quis lacus venenatis iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse pretium elit ac libero condimentum vestibulum. Etiam id suscipit ex.'
};

export default Description;