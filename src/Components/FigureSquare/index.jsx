import PropTypes from 'prop-types';
import { StyledImage, StyledContentHolder } from './Square.styled';

function Image({ image, title }) {
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
                <StyledContentHolder>
                    <h4>{title}</h4>
                </StyledContentHolder>
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
    title: 'Andrew Garfield',
}

export default Image;