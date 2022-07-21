import Description from '../../Description';
import FillerText from '../../Common/FillerText/default';
import Grid from '../../Grid';

import { StyledVwFonts } from './VwFonts.styles';

function VwFonts() {
    const textInfo = ['rem', 'em', 'vw'];

    const textBoxes = textInfo.map((headline, index) => {
        return (
            <article key={index} >
                <h3>{headline}</h3>
                <FillerText />
            </article>
        );
    });

    return (
        <>
            <Description title="VW Fonts" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque." />
            <StyledVwFonts>
                <Grid cols="3">
                    {textBoxes}
                </Grid>
            </StyledVwFonts>
        </>
    )
}

export default VwFonts;
