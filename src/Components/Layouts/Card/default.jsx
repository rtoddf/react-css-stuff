import Description from '../../Common/Description/default';
import Image from '../Image';
import SocialIcons from './SocialIcons';

import data from './data/cards.json';
import './default.scss';

function Card() {
    const repeatAmt = 3;
    const cards = (data.riverdale).map((person, id) => {
        return (
            <div key={id} className="card">
                <Image src={person.image} alt={person.name} shape="round" />
                <h4>{person.name}</h4>
                <h5>{person.show}</h5>

                <SocialIcons links={person.social} animation="rotate" />                
            </div>
        );
    });

    return (
        <>
            <Description title="Cards" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="grid" data-col={repeatAmt}>
                {cards}
            </div>
        </>
    )
}

export default Card;
