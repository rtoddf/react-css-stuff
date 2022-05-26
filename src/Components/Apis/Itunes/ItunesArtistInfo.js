import { useState } from 'react';
import Card from '../../Common/Card/default';
import { ItunesData } from '../../../Apis/Itunes';
import './default.scss';

function ItunesArtistInfo() {
  const [artistName, setArtistName] = useState('Lizzo');
  const [songTitle, setSongTitle] = useState('');

  const data = ItunesData(artistName, songTitle, 'musicTrack');

  const cards = data.map((track, index) => {
    // console.log('track: ', track);
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
        {artistName} {songTitle !== '' ? `- {songTitle}` : ``}
      </h3>
      <div className='grid' data-col='4'>
        {cards}
      </div>
    </div>
  );
}

export default ItunesArtistInfo;
