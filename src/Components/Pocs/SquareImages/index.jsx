import Grid from '../../Grid';
import Description from '../../Description';
import Image from '../../FigureSquare';
import data from './data.json';

import { StyledSquare } from './Square.styled';

function SquareImages() {
    const cols = 6;

    return (
        <>
            <Description title="Square Images" />
            <Grid cols={cols} gap="0">
                {data.map((item, id) => {
                    if(id < data.length - data.length % cols) {
                        return (
                            <StyledSquare key={id}>
                                <Image image={item.image} title={item.title} />
                            </StyledSquare>
                        )
                    } else {
                        return null;
                    }
                })}
            </Grid>
            <Grid cols={data.length % cols} gap="0">
                {data.map((item, id) => {
                    if(id >= data.length - data.length % cols) {
                        return (
                            <StyledSquare key={id}>
                                <Image image={item.image} title={item.title} />
                            </StyledSquare>
                        )
                    } else {
                        return null;
                    }
                })}
            </Grid>
        </>
    )
}

export default SquareImages;
