import PropTypes from "prop-types";
import { theme } from '../../../../styles/Theme';
import { StyledBio } from './Bio.styles';

function Bio({ 
        color, 
        backgroundColor, 
        positionFontSize, 
        bioFontSize,
        position, 
        highschool, 
        classYear, 
        city, 
        state 
    }) {
    return (
        <StyledBio 
            color={color} 
            backgroundColor={backgroundColor} 
            positionFontSize={positionFontSize} 
            bioFontSize={bioFontSize}
            >
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
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    positionFontSize: PropTypes.string,
    bioFontSize: PropTypes.string,
};

Bio.defaultProps = {
    color: theme.grays.white,
    backgroundColor: theme.colors.dawgNationRed,
    positionFontSize: '1rem',
    bioFontSize: '0.875rem',
}

export default Bio;