import { useState } from 'react';
import Card from '../../Common/Card/default';
import { ItunesData } from '../../../Apis/Itunes';
import './default.scss';

function ItunesImages() {
  const [artistName, setArtistName] = useState('Charlie Puth');
  const [songTitle, setSongTitle] = useState('Marvin Gaye');
  const data = ItunesData(artistName, songTitle, 'musicTrack');

  const cards = data.map((track, index) => {
    if (track.kind !== 'music-video' && track.artistName === artistName) {
      return (
        <Card
          index={index}
          name={artistName}
          show={track.primaryGenreName}
          img={track.artworkUrl100.replace('100x100', '225x225')}
          imgShape='round'
          link={track.artistViewUrl}
        />
      );
    }
  });

  return (
    <div className='itunes'>
      <h3>
        {artistName} {songTitle !== '' ? `- ${songTitle}` : ``}
      </h3>
      <div className='grid' data-col='4'>
        {cards}
      </div>
    </div>
  );
}

export default ItunesImages;
