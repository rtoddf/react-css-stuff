import Grid from '../../Grid';
import Description from '../../Description';
import Circle from '../Circle';

import { StyledDropShadows } from './DropShadows.styles';

function DropShadows() {

    const gradientInfo = [
        {
            className: "dropshadow",
        },
        {
            className: "dropshadow",
        },
        {
            className: "dropshadow",
        },
        {
            className: "dropshadow",
        },
        {
            className: "dropshadow",
        },
    ];

    const circles = gradientInfo.map((circle, index) => {
        return <Circle key={index} classNames={circle.className} />;
    });

    return (
        <StyledDropShadows>
            <Description title="Dropshadows" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <Grid cols="5">
                {circles}
            </Grid>
        </StyledDropShadows>
    )
}

export default DropShadows;
