import PropTypes from "prop-types";
import { theme } from '../../../../styles/Theme';
import { StyledBadge } from './Badge.styles';

function Badge({ playerNumber, color, borderColor, gradientColor1, gradientColor2 }) {
    return (
        <StyledBadge color={color} borderColor={borderColor} gradientColor1={gradientColor1} gradientColor2={gradientColor2}>
            {playerNumber}
        </StyledBadge>
    )
}

Badge.propTypes = {
    playerNumber: PropTypes.number,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    gradientColor1: PropTypes.string,
    gradientColor2: PropTypes.string,
};

Badge.defaultProps = {
    color: theme.grays.white,
    borderColor: theme.grays.white,
    gradientColor1: theme.grays.black,
    gradientColor2: theme.colors.dawgNationRed,
};

export default Badge;