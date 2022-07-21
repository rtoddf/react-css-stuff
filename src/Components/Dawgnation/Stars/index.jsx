import PropTypes from "prop-types";
import { StyledStars } from './Stars.styles';

const Stars = ({ starRating }) => (
  <StyledStars
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 213.5 35.3"
    enableBackground="new 0 0 213.5 35.3;"
    xmlSpace="preserve"
    className={`starRating starRating-${starRating}`}
  >
    <path d="M18.7,0l5.7,11.6l12.8,1.9l-9.3,9l2.2,12.8l-11.5-6l-11.5,6l2.2-12.8l-9.3-9l12.8-1.9L18.7,0z"></path>
    <path d="M62.8,0l5.7,11.6l12.8,1.9l-9.3,9l2.2,12.8l-11.5-6l-11.5,6l2.2-12.8l-9.3-9l12.8-1.9L62.8,0z"></path>
    <path d="M106.8,0l5.7,11.6l12.8,1.9l-9.3,9l2.2,12.8l-11.5-6l-11.5,6l2.2-12.8l-9.3-9l12.8-1.9L106.8,0z"></path>
    <path d="M150.9,0l5.7,11.6l12.8,1.9l-9.3,9l2.2,12.8l-11.5-6l-11.5,6l2.2-12.8l-9.3-9l12.8-1.9L150.9,0z"></path>
    <path d="M195,0l5.7,11.6l12.8,1.9l-9.3,9l2.2,12.8l-11.5-6l-11.5,6l2.2-12.8l-9.3-9l12.8-1.9L195,0z"></path>
  </StyledStars>
);

Stars.propTypes = {
  starRating: PropTypes.string,
};

export default Stars;
