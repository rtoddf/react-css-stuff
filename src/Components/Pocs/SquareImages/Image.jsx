import { StyledImage, StyledContentHolder } from './Square.styled';

function Image({ image, title }) {
    return (
        <>
            <StyledImage>
                <div className="container">
                    <figure>
                        <img src={`../images/pocs/squareimages/${image}`} alt={title} />
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

export default Image;