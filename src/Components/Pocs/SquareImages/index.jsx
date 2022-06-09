import Grid from '../../Grid';
import Description from '../../Description';
import data from './images.json';

import { StyledSquare, StyledImage, StyledContentHolder } from './Square.styled';

function SquareImages() {
    const imageSet01 = data.map((image, id) => {
        if(id < 6) {
            return (
                <StyledSquare key={id}>
                    <div className="tile">
                        <StyledImage>
                            <img src={`../images/pocs/squareimages/${image.image}`} alt={image.title} />
                        </StyledImage>
                        <StyledContentHolder>
                            <h4>{image.title}</h4>
                        </StyledContentHolder>
                    </div>
                </StyledSquare>
            )
        }
    });

    const imageSet02 = data.map((image, id) => {
        if(id < 3) {
            return (
                <StyledSquare key={id}>
                    <div className="tile">
                        <StyledImage>
                            <img src={`../images/pocs/squareimages/${image.image}`} alt={image.title} />
                        </StyledImage>
                        <StyledContentHolder>
                            <h4>{image.title}</h4>
                        </StyledContentHolder>
                    </div>
                </StyledSquare>
            )
        }
    });

    return (
        <>
            <Description title="Square Images" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus." />
            <Grid cols='6' gap="0">
                {imageSet01}
            </Grid>
            <Grid cols='3' gap="0">
                {imageSet02}
            </Grid>
        </>
    )
}

export default SquareImages;
