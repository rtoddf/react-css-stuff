import { useState } from 'react';
import Grid from '../../Grid';
import Description from '../../Description';
import { StyledButton, StyledNeonType } from './Neontype.styled';

function NeonType() {
    const [hue, setHue] = useState({ "name": "blue", "color": "#003264"});
    const multiColors = [
        {
            "name": "blue",
            "color": "#003264"
        },
        {
            "name": "green",
            "color": "#baba71"
        },
        {
            "name": "red",
            "color": "#ae0000"
        },
        {
            "name": "orange",
            "color": "#f06d06"
        },
        {
            "name": "purple",
            "color": "#7705c0"
        }
    ]

    const buttons = multiColors.map((color, index) => {
        return <StyledButton
            key={index}
            onClick={() => setHue(color)}
            color={color}
        >
            {color.name}
        </StyledButton>;
    });

    return (
        <>
            <Description title="CSS Neon Type" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus." />
            <Grid cols="1">
                <StyledNeonType color={hue.color}><p>{hue.name}</p></StyledNeonType>
                <Grid cols={buttons.length}>
                    { buttons }
                </Grid>
            </Grid>
        </>
    )
}

export default NeonType;
