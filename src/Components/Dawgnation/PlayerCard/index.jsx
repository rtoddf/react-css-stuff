import Cap from './Cap';
import Figure from './Figure';
import Foot from './Foot';

import { StyledPlayerCard } from './PlayerCard.styles';

function PlayerCard({player, id}) {
    return (
        <StyledPlayerCard key={id}>
            <div className="number">{player.number}</div>
            <Cap name={player.name} starRating={player.starRating} />
            <Figure image={player.image} alt={player.name} shape="rounded" />
            <div className="bio">
                <div>
                    <div className="position">{player.position}</div>   
                </div>
                {/* <div>
                    <img src="/images/layouts/tags/uga.png" alt="UGA" />
                </div> */}
                <div className="cityState">
                    <div>{player.highschool}, Class of {player.classYear}</div>  
                    <div>{player.city}, {player.state}</div>
                </div>
            </div>
            <div className="stats">
                <div>
                    <div>Height: {player.heightFt}' {player.heightIn}"</div> 
                </div>
                <div className="cityState">
                    <div>Weight: {player.weight}</div> 
                </div>
            </div>
            <Foot />
        </StyledPlayerCard>
    )
}

export default PlayerCard;
