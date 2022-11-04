import { CardStyles } from './CardStyles.styles';

import dogs from '../images/dogs.jpg';
import jeff from '../images/jeff-sentell.jpg';

function Card() {
    return (
        <CardStyles>
            {/* <div className="grid-container card"> */}
                <div className="credits">
                    <div className="author">
                        <img src={jeff} alt="Jeff Sentell" />
                        <div className="name">Jeff Sentell</div>
                    </div>
                    <div className="posted">Posted 32 minutes ago</div>
                </div>
                <div className="lead"><img src={dogs} alt="dogs" /></div>
                <div className="content">
                    <div className="headline">Georgia football: The recruiting tale of the tape gives the Bulldogs a major edge over the Vols</div>
                    <div className="text">
                        <p>Big game in Athens this weekend. No question. Regardless of the rankings. It is one of those matchups which call for a deep dive into how well each program has recruited over the last four cycles.</p>
                        <div className="button">Read More</div>
                    </div>
                </div>
            {/* </div> */}
        </CardStyles>
    )
}

export default Card;
