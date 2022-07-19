import PropTypes from "prop-types";
import Stars from '../Stars';
import { StyledCap } from './Cap.styles';

function Cap({name, starRating}) {
    return (
        <StyledCap>
            <div className="name">{name}</div>
            <Stars starRating={starRating} />  
        </StyledCap>
    )
}

Cap.propTypes = {
    name: PropTypes.string,
    starRating: PropTypes.string,
};

export default Cap;