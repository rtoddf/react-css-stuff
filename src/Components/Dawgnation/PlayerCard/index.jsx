import Cap from './Cap';
import Figure from './Figure';
import Bio from './Bio';
import Stats from './Stats';
import Foot from './Foot';

import { StyledPlayerCard } from './PlayerCard.styles';

function PlayerCard({player, id}) {
    console.log('player: ', player)
    return (
        <StyledPlayerCard key={id}>
            <div className="playerNumber">{player.playerNumber}</div>
            <Cap name={player.name} starRating={player.starRating} />
            <Figure image={player.image} alt={player.name} shape="rounded" />
            <Bio
                player={player}
                position={player.position}
                highschool={player.highschool}
                classYear={player.classYear}
                city={player.city}
                state={player.state}
            />
            <Stats heightFt={player.heightFt} heightIn={player.heightIn} weight={player.weight} />
            <Foot />
        </StyledPlayerCard>
    )
}

export default PlayerCard;
