import React, {useState, useRef, useEffect} from 'react';
import VideoIcon from './icons/video';
import PauseIcon from './icons/pause';
import BarIcon from './icons/bar';
import image from './images/audio-placeholder.jpg';

import './default.scss';

const SvgAnimation = () => {
  const audioId = '1S4uUTeD_1o8vXOYmdVGOlR8exmoTiLw8';
  const headlineText = 'headline';
  const descriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in est ac dolor fringilla mollis. Sed aliquet condimentum mi, non luctus ex ultricies id. Praesent sagittis lectus eget eros ullamcorper porta bibendum nec enim. Suspendisse eget tortor ac sapien porta viverra id at ipsum. In eget mi elit.';

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const audioProgressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const audio =  new Audio();
    audio.src = `https://docs.google.com/uc?export=open&id=${audioId}`;

    audio.addEventListener('loadedmetadata', () => {
      const seconds = audio.duration;
      audioProgressBar.current.max = seconds;
      setDuration(Math.floor(seconds));
    })
  }, [])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs/60);
    const minutesReturned = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const secondsReturned = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutesReturned}:${secondsReturned}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if(!prevValue){
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    audioProgressBar.current.value = audioPlayer.current.currentTime;
    audioProgressBar.current.style.setProperty('--seek-before-width', `${audioProgressBar.current.value / duration * 100}%`);
    setCurrentTime(audioProgressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = audioProgressBar.current.value;
    audioProgressBar.current.style.setProperty('--seek-before-width', `${audioProgressBar.current.value / duration * 100}%`);
    setCurrentTime(audioProgressBar.current.value);
  }

  return (
    <div className="audio-player">
      <div className='progress-bar-holder'>
      <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 921.9 128"
          enableBackground="new 0 0 921.9 128;"
          xmlSpace="preserve"
          className={`barIcon`}
          aria-labelledby="mediaIconTitle mediaIconDesc"
          role="img"
        >
          <title id="mediaIconTitle">bar</title>
          <desc id="mediaIconDesc">bar</desc>

          <defs>  
            <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
                <stop offset="0%" stopColor="#7A5FFF">
                    <animate attributeName="stopColor" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="100%" stopColor="#01FF89">
                    <animate attributeName="stopColor" values="#01FF89; #7A5FFF; #01FF89" dur="4s" repeatCount="indefinite"></animate>
                </stop>
            </linearGradient> 
          </defs>

          <path fill="url('#logo-gradient')" d="M20,73.9c0,5-4.1,9.2-9.1,9.2s-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2s9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M286.6,73.9c0,5-4.1,9.2-9.1,9.2s-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2s9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M320,73.9c0,5-4.1,9.2-9.1,9.2s-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2s9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M386.6,73.9c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M453.3,73.9c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M720,73.9c0,5-4.1,9.2-9.1,9.2s-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2s9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M753.3,73.9c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M820,73.9c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M853.3,73.9c0,5-4.1,9.2-9.1,9.2s-9.1-4.1-9.1-9.2v-19c0-5,4.1-9.2,9.1-9.2s9.1,4.1,9.1,9.2V73.9z"/>
          <path fill="url('#logo-gradient')" d="M786.6,100.6c0,5-4.1,9.2-9.1,9.2s-9.1-4.1-9.1-9.2V28.1c0-5,4.1-9.2,9.1-9.2s9.1,4.1,9.1,9.2V100.6z"/>
          <path fill="url('#logo-gradient')" d="M653.3,100.6c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2V28.1c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V100.6z" />
          <path fill="url('#logo-gradient')" d="M520,100.6c0,5-4.1,9.2-9.1,9.2s-9.1-4.1-9.1-9.2V28.1c0-5,4.1-9.2,9.1-9.2s9.1,4.1,9.1,9.2V100.6z" />
          <path fill="url('#logo-gradient')" d="M353.3,100.6c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2V28.1c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V100.6z" />
          <path fill="url('#logo-gradient')" d="M220,100.6c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2V28.1c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V100.6z" />
          <path fill="url('#logo-gradient')" d="M420,100.6c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2V28.1c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V100.6z" />
          <path fill="url('#logo-gradient')" d="M86.6,100.6c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2V28.1c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V100.6z" />
          <path fill="url('#logo-gradient')" d="M920,100.6c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2V28.1c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V100.6z" />
          <path fill="url('#logo-gradient')" d="M620.7,117.3c0,5-4.1,9.2-9.2,9.2h-1.3c-5,0-9.2-4.1-9.2-9.2V11.5c0-5,4.1-9.2,9.2-9.2h1.3c5,0,9.2,4.1,9.2,9.2V117.3z"/>
          <path fill="url('#logo-gradient')" d="M687.4,117.3c0,5-4.1,9.2-9.2,9.2h-1.3c-5,0-9.2-4.1-9.2-9.2V11.5c0-5,4.1-9.2,9.2-9.2h1.3c5,0,9.2,4.1,9.2,9.2V117.3z"/>
          <path fill="url('#logo-gradient')" d="M254.1,117.3c0,5-4.1,9.2-9.2,9.2h-1.3c-5,0-9.2-4.1-9.2-9.2V11.5c0-5,4.1-9.2,9.2-9.2h1.3c5,0,9.2,4.1,9.2,9.2V117.3z"/>
          <path fill="url('#logo-gradient')" d="M187.4,117.3c0,5-4.1,9.2-9.2,9.2h-1.3c-5,0-9.2-4.1-9.2-9.2V11.5c0-5,4.1-9.2,9.2-9.2h1.3c5,0,9.2,4.1,9.2,9.2V117.3z"/>
          <path fill="url('#logo-gradient')" d="M53.7,106.3c0,5-4.1,9.2-9.2,9.2h-0.6c-5,0-9.2-4.1-9.2-9.2V22.5c0-5,4.1-9.2,9.2-9.2h0.6c5,0,9.2,4.1,9.2,9.2V106.3z"/>
          <path fill="url('#logo-gradient')" d="M153.7,106.3c0,5-4.1,9.2-9.2,9.2h-0.6c-5,0-9.2-4.1-9.2-9.2V22.5c0-5,4.1-9.2,9.2-9.2h0.6c5,0,9.2,4.1,9.2,9.2V106.3z"/>
          <path fill="url('#logo-gradient')" d="M487,106.3c0,5-4.1,9.2-9.2,9.2h-0.6c-5,0-9.2-4.1-9.2-9.2V22.5c0-5,4.1-9.2,9.2-9.2h0.6c5,0,9.2,4.1,9.2,9.2V106.3z"/>
          <path fill="url('#logo-gradient')" d="M587,106.3c0,5-4.1,9.2-9.2,9.2h-0.6c-5,0-9.2-4.1-9.2-9.2V22.5c0-5,4.1-9.2,9.2-9.2h0.6c5,0,9.2,4.1,9.2,9.2V106.3z"/>
          <path fill="url('#logo-gradient')" d="M887,106.3c0,5-4.1,9.2-9.2,9.2h-0.6c-5,0-9.2-4.1-9.2-9.2V22.5c0-5,4.1-9.2,9.2-9.2h0.6c5,0,9.2,4.1,9.2,9.2V106.3z" />
          <path fill="url('#logo-gradient')" d="M120,83.6c0,5-4.1,9.2-9.1,9.2c-5,0-9.1-4.1-9.1-9.2V45.2c0-5,4.1-9.2,9.1-9.2c5,0,9.1,4.1,9.1,9.2V83.6z" />
          <path fill="url('#logo-gradient')" d="M553.3,83.6c0,5-4.1,9.2-9.1,9.2s-9.1-4.1-9.1-9.2V45.2c0-5,4.1-9.2,9.1-9.2s9.1,4.1,9.1,9.2V83.6z" />
        </svg>
      </div>
      
      {/* <div className="audio-image-holder">
        <img src={image} />

        <div className={`play-pause-buttons ${isPlaying ? 'playing' : 'paused'}`} onClick={togglePlayPause}>
          { isPlaying ? <PauseIcon /> : <VideoIcon /> }      
        </div>

        <div className="audio-range">
          <input ref={audioProgressBar} type="range" className="range" defaultValue='0' onChange={changeRange} />
        </div>
      </div>

      <div className="audio-controls">
        <div className="audio-current-time">
          {calculateTime(currentTime)}
        </div>
        <div></div>
        <div className="audio-current-duration">
          {calculateTime(duration)}
        </div>
      </div>

      <div className="audio-content-holder">
        {headlineText && (
          <div className="audio-headline">
            { headlineText }
          </div>
        )}
        {headlineText && (
          <div className="audio-description">
            { descriptionText }
          </div>
        )}
      </div> */}

      <audio
        ref={audioPlayer}
        src={`https://docs.google.com/uc?export=open&id=${audioId}`}
        type="audio/mpeg"
        preload="metadata"
      />
    </div>
  );
};

// AudioPlayer.propTypes = {
//   customFields: PropTypes.shape({
//     audioId: PropTypes.string.tag({
//       label: 'Audio ID',
//       description: 'Audio ID',
//       defaultValue: '',
//     }),
//     headlineText: PropTypes.string.tag({
//       label: 'Headline text',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt turpis mauris, eget condimentum lacus dapibus sed. Duis ullamcorper lacus sed fringilla vestibulum. ',
//       defaultValue: '',
//     }),
//     descriptionText: PropTypes.string.tag({
//       label: 'Headline text',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt turpis mauris, eget condimentum lacus dapibus sed. Duis ullamcorper lacus sed fringilla vestibulum. ',
//       defaultValue: '',
//     }),
//   }),
// };

SvgAnimation.label = 'Audio Player - V2';

export default SvgAnimation;