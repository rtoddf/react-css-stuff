import Grid from '../../Grid';
import Description from '../../Description';
import Circle from '../../Reference/Circle';
import { StyledSwiper } from './Swiper.styled';
// import './default.scss';

function Swiper() {
    const repeatAmt = 6
    return (
        <>
            <Description title="Swiper" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque." />
            <StyledSwiper>
                <Grid cols={repeatAmt}>
                    <h3>something</h3>
                </Grid>
            </StyledSwiper>
        </>
    )
}

export default Swiper;
