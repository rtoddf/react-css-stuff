import Cap from './Cap';
import Figure from './Figure';
import Bio from './Bio';
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
            <div className="stats">
                <div>Height: {player.heightFt}' {player.heightIn}"</div>
                <div className="cityState">Weight: {player.weight}</div> 
            </div>
            <Foot />
        </StyledPlayerCard>
    )
}

export default PlayerCard;
