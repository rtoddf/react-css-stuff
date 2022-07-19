import PropTypes from "prop-types";
import { StyledBadge } from './Badge.styles';

function Badge({ playerNumber }) {
    return (
        <StyledBadge>
            {playerNumber}
        </StyledBadge>
    )
}

Badge.propTypes = {
    playerNumber: PropTypes.number,
};

export default Badge;