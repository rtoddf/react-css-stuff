import PropTypes from "prop-types";
import Stars from '../../Stars';
import { StyledCap } from './Cap.styles';

function Cap({ name, starRating, classLevel }) {
    return (
        <StyledCap>
            <div className="name">{name}</div>
            <div className="classLevel">
                {classLevel}
                <img src="/images/layouts/tags/uga.png" alt="UGA" />
            </div>
            <Stars starRating={starRating} />  
        </StyledCap>
    )
}

Cap.propTypes = {
    name: PropTypes.string,
    starRating: PropTypes.string,
    classLevel: PropTypes.string,
};

export default Cap;