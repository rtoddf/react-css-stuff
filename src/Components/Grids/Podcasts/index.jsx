import { PodcastsPage } from './PodcastsPage.styles';
import podcasts from './images/podcasts.jpg';

function Podcasts() {
    return (
        <>
            <PodcastsPage>
                <div className="image">
                    <img src={podcasts} alt="podcasts" />
                </div>
                <div className="text">
                    <div className="headline"><span>Publish</span><span>Your Podcasts Anywhere</span></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tincidunt metus. Vestibulum rutrum est eu velit tincidunt sodales. Sed eleifend ipsum ut cursus ultricies. Nam sit amet lacus quis purus scelerisque suscipit. Ut vel laoreet urna. Phasellus sit amet magna vel felis ornare vehicula et nec quam.</p>
                </div>
                {/* <Card />
                <New /> */}
            </PodcastsPage>
            {/* <List /> */}
        </>
    )
}

export default Podcasts;
