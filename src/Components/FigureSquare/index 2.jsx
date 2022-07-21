import PropTypes from 'prop-types';
import FigureCaption from '../FigureCaption';

import { StyledImage } from './Square.styled';

function Image({ image, title, copy }) {
    return (
        <>
            <StyledImage>
                <div className="container">
                    <figure>
                        <img src={`${image}`} alt={title} />
                    </figure>
                </div>
            </StyledImage>
            {title && (
                <FigureCaption title={title} copy={copy} />
            )}
        </>
    )
}

Image.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
}

Image.defaultProps = {
    image: '../images/pocs/squareimages/andrew-garfield.jpg',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Andrew Garfield',
}

export default Image;