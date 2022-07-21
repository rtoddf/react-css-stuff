import Grid from '../../Grid';
import Description from '../../Description';
import Figure from '../../Figure';
import SocialIcons from '../../SocialIcons';

import { StyledCard } from './Card.styles';
import data from './data/cards.json';

function SocialCard() {
    const repeatAmt = 3;
    const cards = (data.riverdale).map((person, id) => {
        return (
            <StyledCard key={id}>
                <Figure image={person.image} alt={person.name} shape="circle" />
                <h4>{person.name}</h4>
                <h5>{person.show}</h5>

                <SocialIcons links={person.social} animation="rotate" />                
            </StyledCard>
        );
    });

    return (
        <>
            <Description title="Cards" copy="" />
            <Grid cols={repeatAmt}>
                {cards}
            </Grid>
        </>
    )
}

export default SocialCard;
