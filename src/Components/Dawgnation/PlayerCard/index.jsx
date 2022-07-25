import Badge from './Badge';
import Cap from './Cap';
import Figure from './Figure';
import Bio from './Bio';
import Stats from './Stats';
import SocialIcons from '../../SocialIcons';
import Foot from './Foot';

import { StyledPlayerCard } from './PlayerCard.styles';

function PlayerCard({player}) {
    return (
        <StyledPlayerCard>
            <Badge playerNumber={player.playerNumber} />
            <Cap name={player.name} starRating={player.starRating} />

            <div className="content">
                <Figure image={player.image} alt={player.name} shape="rounded" />
                <div className="stuff">
                    <Bio
                        player={player}
                        position={player.position}
                        highschool={player.highschool}
                        classYear={player.classYear}
                        city={player.city}
                        state={player.state}
                    />
                    <Stats heightFt={player.heightFt} heightIn={player.heightIn} weight={player.weight} />
                </div>
                
            </div>

            <div className="socialContent">
                <SocialIcons links={player.social} animation="rotate" />  
            </div>

            <Foot />
        </StyledPlayerCard>
    )
}

export default PlayerCard;
