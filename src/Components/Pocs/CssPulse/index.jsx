import Grid from '../../Grid';
import Description from '../../Description';
import Circle from '../../Reference/Circle';
import { StyledPulse } from './Pulse.styled';
// import './default.scss';

function CssPulse() {
    const repeatAmt = 6
    return (
        <>
            <Description title="CSS Animations - Pulse" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque." />
            <StyledPulse>
                <Grid cols={repeatAmt}>
                    {[...Array(repeatAmt)].map((el, index) => (
                        <Circle key={index} classNames='pulse small' />
                    ))}
                </Grid>
            </StyledPulse>
        </>
    )
}

export default CssPulse;
