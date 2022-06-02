import Grid from '../../Grid';
import Description from '../../Description';
import Box from '../Box';
import { StyledKeyframes } from './Keyframes.styles';

function Keyframes() {

    const boxInfo = [
        {
            animation: "rotate-x",
        },
        {
            animation: "rotate-x origin-top",
        },
        {
            animation: "rotate-x origin-bottom",
        },
        {
            animation: "rotate-y",
        },
        {
            animation: "rotate-y origin-left",
        },
        {
            animation: "rotate-y origin-right",
        },
        {
            animation: "rotate-z",
        },
        {
            animation: "rotate-z origin-left",
        },
        {
            animation: "rotate-z origin-right",
        },
    ];

    const boxes = boxInfo.map((box, index) => {
        return <Box key={index} animation={box.animation} />;
      });

    return (
        <StyledKeyframes>
            <Description title="Keyframes" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <Grid cols="3">
                {boxes}
            </Grid>
        </StyledKeyframes>
    )
}

export default Keyframes;
