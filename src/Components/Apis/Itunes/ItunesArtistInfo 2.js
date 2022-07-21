import { useState } from 'react';
import Grid from '../../Grid';
import Card from '../../Card';
import { ItunesData } from '../../../Apis/Itunes';

function ItunesArtistInfo() {
  const [artistName, setArtistName] = useState('Jukebox the Ghost');
  const [songTitle, setSongTitle] = useState('');

  const data = ItunesData(artistName, songTitle, 'musicTrack');

  const cards = data.map((track, index) => {
    if (track.kind !== 'music-video' && track.artistName === artistName) {
      return (
        <Card
          key={index}
          title={track.artistName}
          img={track.artworkUrl100.replace('100x100', '225x225')}
          imgShape='round'
          imgSrc='external'
          copy={track.primaryGenreName}
          link={track.artistViewUrl}
          linkTarget='_blank'
        />
      );
    }
  });

  return (
    <>
      <h3>
        {artistName} {songTitle !== '' ? `- {songTitle}` : ``}
      </h3>
      <input type='text' id='name' name='name'></input>
      <button type='button'>Click Me!</button>

      <Grid cols='4'>{cards}</Grid>
    </>
  );
}

export default ItunesArtistInfo;
