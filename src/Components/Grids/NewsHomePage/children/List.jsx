import { ListStyles } from './ListStyles.styles';

import list01 from '../images/list01.jpg';
import list02 from '../images/list02.jpg';
import list03 from '../images/list03.jpg';

function List() {
    return (
        <ListStyles>
            <div className="item">
                <div class="image">
                    <img src={list01} alt="something" />
                </div>
                <div className="content">
                    <div class="order">01</div>
                    <div className="headline">Relaxed Josh Heupel</div>
                    <div className="text">Relaxed Josh Heupel has had success against Kirby Smart defenses, sees flexibility in current Bulldogs</div>
                </div>
                
            </div>
            <div className="item">
                <div class="image">
                    <img src={list02} alt="something" />
                </div>
                <div className="content">
                    <div class="order">02</div>
                    <div className="headline">Anonymous coaches rip Georgia</div>
                    <div className="text">Anonymous coaches rip Georgia football defense, wide receivers to ESPN</div>
                </div>
            </div>
            <div className="item">
                <div class="image">
                    <img src={list03} alt="something" />
                </div>
                <div className="content">
                    <div class="order">03</div>
                    <div className="headline">Georgia football podcast</div>
                    <div className="text">SEC Network analyst rips UGA offense ahead of Tennessee showdown</div>
                </div>
            </div>
        </ListStyles>
    )
}

export default List;
