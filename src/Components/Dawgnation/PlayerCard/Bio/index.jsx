import PropTypes from "prop-types";
import { StyledBio } from './Bio.styles';

function Bio({ position, highschool, classYear, city, state }) {
    return (
        <StyledBio>
            <div>
                <div className="position">{position}</div>   
            </div>
            {/* <div>
                <img src="/images/layouts/tags/uga.png" alt="UGA" />
            </div> */}
            <div className="cityState">
                <div>{highschool}, Class of {classYear}</div>  
                <div>{city}, {state}</div>
            </div>
        </StyledBio>
    )
}

Bio.propTypes = {
    position: PropTypes.string,
    highschool: PropTypes.string,
    classYear: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
};

export default Bio;