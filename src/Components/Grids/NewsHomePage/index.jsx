import { NewsHome } from './NewsHomePage.styles';
import dogs from './images/dogs.jpg';
import jeff from './images/jeff-sentell.jpg';

function NewsHomePage() {
    return (
        <NewsHome>
            <div className="grid-container main">
                <div className="grid-container card">
                    <div className="credits">
                        <div className="author">
                            <img src={jeff} alt="Jeff Sentell" />
                            <div className="name">Jeff Sentell</div>
                        </div>
                        <div className="posted">Posted 32 minutes ago</div>
                    </div>
                    <div className="image lead"><img src={dogs} alt="dogs" /></div>
                    <div className="content">
                        <div className="headline">Georgia football: The recruiting tale of the tape gives the Bulldogs a major edge over the Vols</div>
                        <div className="text">
                            <p>Big game in Athens this weekend. No question. Regardless of the rankings. It is one of those matchups which call for a deep dive into how well each program has recruited over the last four cycles. That will provide a general impression as to which team should have the edge in talent on Dooley Field inside Sanford Stadium on Saturday.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-container new">
                    <div className="head">New</div>
                    <div className="item">
                        <div className="headline">Kirby Smart updates Georgia injuries Tennessee week; Adonai Mitchell return would provide lift</div>
                        <div className="content">The Georgia pass game could get a lift if receiver Adonai Mitchell is able to return from the high ankle sprain he suffered the second game of the season and be ready to go against Tennessee.</div>
                    </div>
                    <div className="item">
                        <div className="headline">Georgia football podcast: Former Tennessee QB takes a big shot at UGA fans</div>
                        <div className="content">Georgia football podcast: Former Tennessee QB takes a big shot at UGA fans</div>
                    </div>
                    <div className="item">
                        <div className="headline">Kirby Smart reacts to first CFP rankings, reveals Georgia's 'ultimate goal' this week</div>
                        <div className="content">Kirby Smart and Josh Heupel had different feelings about the first set of CFP rankings on Tuesday night, but both coaches are moving forward in the same manner.</div>
                    </div>
                </div>
            </div>
        </NewsHome>
    )
}

export default NewsHomePage;
