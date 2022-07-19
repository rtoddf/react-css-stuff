import Figure from '../../Figure';
import Stars from '../Stars';

import { StyledPlayerCard } from './PlayerCard.styles';

function PlayerCard({player, id}) {
    return (
        <StyledPlayerCard key={id}>
            <div className="number">{player.number}</div>
            <div className="cap">
                <div className="name">{player.name}</div>
                <Stars starRating={player.starRating} />  
            </div>
            <div>
                <Figure image={player.image} alt={player.name} />
            </div>
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
            <div className="foot">
                <div>Committed:&nbsp;&nbsp;</div>
                <div><img src="/images/layouts/tags/uga.png" alt="UGA" /></div>        
            </div>
        </StyledPlayerCard>
    )
}

export default PlayerCard;
