import PropTypes from "prop-types";
import { StyledStats } from './Stats.styles';

function Stats({ heightFt, heightIn, weight }) {
    return (
        <StyledStats>
            <div>Height: {heightFt}' {heightIn}"</div>
            <div>Weight: {weight}</div> 
        </StyledStats>
    )
}

Stats.propTypes = {
    heightFt: PropTypes.number,
    heightIn: PropTypes.number,
    weight: PropTypes.number,
};

export default Stats;