import Image from '../Image';
import './default.scss';

function Card({ index, name, show, img, imgShape, link }) {
    return (
        <div key={index} className="card">
            <Image src={img} alt={name} shape={imgShape} />
            <h4>{name}</h4>
            <h5>{show}</h5>

            {/* <SocialIcons links={person.social} animation="rotate" />*/}
        </div>
    )
}

export default Card;
