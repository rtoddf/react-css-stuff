import Grid from '../../Grid';
import Description from '../../Description';
import Image from './Image';
import data from './data.json';

import { StyledSquare } from './Square.styled';

function SquareImages() {
    const divisions = [6, 3];

    const imageSet01 = data.map((item, id) => {
        if(id < divisions[0]) {
            return (
                <StyledSquare key={id}>
                    <Image image={item.image} title={item.title} />
                </StyledSquare>
            )
        } else {
            return null;
        }
    });

    const imageSet02 = data.map((item, id) => {
        if(id >= divisions[0]) {
            return (
                <StyledSquare key={id}>
                    <Image image={item.image} title={item.title} />
                </StyledSquare>
            )
        } else {
            return null;
        }
    });

    return (
        <>
            <Description title="Square Images" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus." />
            <Grid cols={divisions[0]} gap="0">
                {imageSet01}
            </Grid>
            <Grid cols={data.length - divisions[0]} gap="0">
                {imageSet02}
            </Grid>
        </>
    )
}

export default SquareImages;
