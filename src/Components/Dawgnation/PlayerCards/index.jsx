import Grid from '../../Grid';
import Description from '../../Description';
import players from '../data/players.json';
import PlayerCard from '../PlayerCard';

import audio from './audio/connor01.mp3';

function PlayerCards() {
    return (
        <>
            <Description title="Player Cards" copy="" />
            <Grid cols="4">
                <h1>test</h1>
                <audio src={audio} controls />
            </Grid>
            {/* <Grid cols="4">
                {(players.dawgnation).map((player, id) => (
                    <PlayerCard key={id} player={player} />
                ))}
            </Grid> */}
        </>
    )
}

export default PlayerCards;
