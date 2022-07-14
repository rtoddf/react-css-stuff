import { StyledImage, StyledContentHolder } from './Square.styled';

function Image({ image, title }) {
    return (
        <>
            <StyledImage>
                <div className="container">
                    <figure>
                        <img src={image} alt={title} />
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