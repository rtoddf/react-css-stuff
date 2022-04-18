import React from 'react';
import { ItunesData } from '../../../Apis/Itunes';
import './default.scss';

function Itunes() {
  const artistName = 'Charlie Puth';
  const songTitle = 'Marvin Gaye';
  const entity = 'musicTrack';

  const data = ItunesData(artistName, songTitle, entity);

  const images = data.map((image, index) => {
    if (image.kind !== 'music-video' && image.artistName === artistName) {
      return (
        <img
          key={index}
          src={image.artworkUrl100.replace('100x100', '225x225')}
          alt={image.artistName}
        />
      );
    }
  });

  return (
    <div className='itunes'>
      <h3>
        {artistName} - {songTitle}
      </h3>
      <div className='grid' data-col='4'>
        {images}
      </div>
    </div>
  );
}

export default Itunes;
