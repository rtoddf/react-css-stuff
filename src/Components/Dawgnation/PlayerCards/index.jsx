import Grid from '../../Grid';
import Description from '../../Description';
import players from '../data/players.json';
import PlayerCard from '../PlayerCard';

function PlayerCards() {
    return (
        <>
            <Description title="Player Cards" copy="" />
            <Grid cols="4">
                {(players.dawgnation).map((player, id) => (
                    <PlayerCard player={player} id={id} />
                ))}
            </Grid>
        </>
    )
}

export default PlayerCards;
