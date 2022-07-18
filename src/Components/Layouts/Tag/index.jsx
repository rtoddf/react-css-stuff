import Grid from '../../Grid';
import Description from '../../Description';
import Figure from '../../Figure';
import Stars from '../../Stars';

import { StyledTag } from './Tag.styles';
import data from './data/tags.json';

function Tag() {
    const repeatAmt = 5;
    const cards = (data.riverdale).map((player, id) => {
        return (
            <StyledTag key={id}>
                <div className="number">{player.number}</div>
                <div className="cap">
                    <div className="name">{player.name}</div>
                    <Stars starRating={player.starRating} />  
                </div>
                <div>
                    <Figure image={player.image} alt={player.name} />
                </div>
                <div className="bio">
                    <div className="position">{player.position}</div>   
                    <div className="school">{player.highschool}, Class of {player.classYear}</div>  
                    <div className="cityState">{player.city}, {player.state}</div> 
                    <div className="stats">{player.heightFt}' {player.heightIn}", {player.weight} pounds</div> 
                </div>
            </StyledTag>
        );
    });

    return (
        <>
            <Description title="Tags" copy="" />
            <Grid cols={repeatAmt}>
                {cards}
            </Grid>
        </>
    )
}

export default Tag;
