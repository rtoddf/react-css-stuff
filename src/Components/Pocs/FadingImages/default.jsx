import React, {useEffect} from 'react';
import Description from '../../Common/Description/default';
import ImageHolder from './ImageHolder';
import data from './data/people.json';
import './default.scss';

function FadingImages() {
    const repeatAmt = 9

    let usedIndexes = [];
    function getUniqueRandomNumber(x) {
        const index = Math.floor(Math.random() * (x));
        if (usedIndexes.length === x) {
            usedIndexes = [];
        }

        if (usedIndexes.includes(index)) {
            return getUniqueRandomNumber(x);
        } else { 
            usedIndexes.push(index);
            return index;
        }
    }

    let usedImages = [];
    function getUniqueRandomImage(x) {
        const index = Math.floor(Math.random() * (x));
        if (usedImages.length === x) {
            usedImages = [];
        }

        if (usedImages.includes(index)) {
            return getUniqueRandomImage(x);
        } else { 
            usedImages.push(index);
            return index;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // using the random number generator function - random imageholder
            let randomHolderNumber = getUniqueRandomNumber(repeatAmt);

            // select a random imageholder
            // let randomHolderNumber = 1 + Math.floor(Math.random() * (repeatAmt - 1));
            // select a random data image node
            let randomImageNumber = getUniqueRandomImage(repeatAmt);

            // we need a random image number array
            // we then need to remove that number from the holders
            // we need a randmom holder number array
            
            // choose the random div based on the random number
            // this number should be between 1 and 9
            const holderToChange = document.querySelector(`.fading-images article:nth-child(${randomHolderNumber + 1}) div figure img`);
            // change the image src of the random div
            console.log('data[randomImageNumber]: ', data[randomImageNumber])
            holderToChange.src = data[randomImageNumber].image;
        }, 6000);
        
        return () => clearInterval(interval);
    }, []);

    const holders = (data).map((image, id) => {
        if(id <= 8){
            return (
                <article key={id} data-image-layout="square">
                    <div className="tile">
                        <ImageHolder image={image} />
                    </div>
                </article>
            );
        }
    });

    return (
        <>
            <Description title="Fading Images" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="grid fading-images" data-margin="0" data-layout="checkerboard-414">
                {holders}
            </div>
        </>
    )
}

export default FadingImages;
