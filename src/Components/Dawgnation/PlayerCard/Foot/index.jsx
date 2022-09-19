// import PropTypes from "prop-types";
import { StyledFoot } from './Foot.styles';

function Foot({ classLevel }) {
    return (
        <StyledFoot>
            {/* <div>Committed:&nbsp;&nbsp;</div> */}
            <div><img src="/images/layouts/tags/uga.png" alt="UGA" /></div>        
        </StyledFoot>
    )
}

Foot.propTypes = {};

export default Foot;