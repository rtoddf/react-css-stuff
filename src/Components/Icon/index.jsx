import PropTypes from 'prop-types';
import { theme } from '../../styles/Theme';
import { StyledIcon } from './Icon.styled';

function Icon({ iconClass, animation, color, borderColor, gradientColor1, gradientColor2 }) {
    return (
        <StyledIcon className={`${iconClass} ${animation}`} color={color} borderColor={borderColor} gradientColor1={gradientColor1} gradientColor2={gradientColor2}></StyledIcon>
    )
}

Icon.propTypes = {
    iconClass: PropTypes.string,
    animation: PropTypes.oneOf(['rotate', 'pulse']),
    color: PropTypes.string,
    borderColor: PropTypes.string,
    gradientColor1: PropTypes.string,
    gradientColor2: PropTypes.string,
}

Icon.defaultProps = {
    iconClass: 'fab fa-facebook-f',
    animation: 'rotate',
    color: theme.grays.white,
    borderColor: theme.grays.dawgNationRed,
    gradientColor1: theme.grays.black,
    gradientColor2: theme.colors.dawgNationRed,
};

export default Icon;