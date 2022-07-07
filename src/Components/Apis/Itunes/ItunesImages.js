import { useState } from 'react';
import Grid from '../../Grid';
import Description from '../../Description';
import Card from '../../Card';
import { ItunesData } from '../../../Apis/Itunes';

function ItunesImages() {
  const [artistName, setArtistName] = useState('Charlie Puth');
  const [songTitle, setSongTitle] = useState('Marvin Gaye');
  const data = ItunesData(artistName, songTitle, 'musicTrack');

  const cards = data.map((track, index) => {
    console.log('track: ', track);
    if (track.kind !== 'music-video' && track.artistName === artistName) {
      return (
        <>
          <Card
            title={track.artistName}
            img={track.artworkUrl100.replace('100x100', '225x225')}
            imgSrc='external'
            copy={track.primaryGenreName}
            link={track.artistViewUrl}
            linkTarget='_blank'
          />
        </>
      );
    }
  });

  return (
    <>
      <Description
        title={`${artistName} ${songTitle !== '' ? songTitle : ''}`}
        copy='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque.'
      />
      <Grid cols='4'>{cards}</Grid>
    </>
  );
}

export default ItunesImages;
