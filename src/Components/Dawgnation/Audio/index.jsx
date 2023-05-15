import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import VideoIcon from './icons/video';
import PodcastIcon from './icons/podcast';
import image from './images/audio-placeholder.jpg';

import styles from './default.scss';

import './default.scss';

const AudioPlayer = () => {
  const audioId = '1S4uUTeD_1o8vXOYmdVGOlR8exmoTiLw8';
  const headlineText = 'headline';
  const descriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in est ac dolor fringilla mollis. Sed aliquet condimentum mi, non luctus ex ultricies id. Praesent sagittis lectus eget eros ullamcorper porta bibendum nec enim. Suspendisse eget tortor ac sapien porta viverra id at ipsum. In eget mi elit.';

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const audioProgressBar = useRef();
  const animationRef = useRef();

  console.log('styles: ', styles)

  useEffect(() => {
    // console.log('audioPlayer: ', audioPlayer)
    console.log('audioPlayer.current: ', audioPlayer.current)
    console.log('audioPlayer.current.duration: ', audioPlayer.current.duration)

    // const seconds = 36;
    const seconds = audioPlayer.current.duration;

    audioProgressBar.current.max = seconds;
    setDuration(Math.floor(seconds));
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

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
      <div className="audio-image-holder">
        <img src={image} />

        <div className="play-pause-buttons" onClick={togglePlayPause}>
          { isPlaying ? <PodcastIcon /> : <VideoIcon /> }      
        </div>
      </div>

      <div className="audio-controls">
        <div className="audio-current-time">
          {calculateTime(currentTime)}
        </div>

        <div className="audio-range">
          <input ref={audioProgressBar} type="range" className="range" defaultValue='0' onChange={changeRange} />
        </div>

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
      </div>

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

AudioPlayer.label = 'Audio Player - V2';

export default AudioPlayer;