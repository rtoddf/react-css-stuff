import { useState } from 'react';
import Grid from '../../Grid';
import Card from '../../Common/Card/default';
import { ItunesData } from '../../../Apis/Itunes';

function ItunesArtistInfo() {
  const [artistName, setArtistName] = useState('Jukebox the Ghost');
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
      <input type='text' id='name' name='name'></input>
      <button type='button'>Click Me!</button>

      <Grid cols='4'>{cards}</Grid>
    </div>
  );
}

export default ItunesArtistInfo;
