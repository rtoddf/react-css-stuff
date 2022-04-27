import React from 'react';
import { ItunesData } from '../../../Apis/Itunes';
import './default.scss';

function ItunesArtistInfo() {
  const artistName = 'Lizzo';
  const songTitle = '';
  const entity = 'musicTrack';

  const data = ItunesData(artistName, songTitle, entity);

  const images = data.map((track, index) => {
    console.log('track: ', track);
    if (track.kind !== 'music-video' && track.artistName === artistName) {
      return (
        <article key={index} className='panel'>
          <div className='track'>
            <div className='artwork'>
              <a href={track.artistViewUrl} target='_blank' rel='noreferrer'>
                <img
                  src={track.artworkUrl100.replace('100x100', '225x225')}
                  alt={track.artistName}
                />
              </a>
            </div>
            <ul>
              <li>
                <a href={track.artistViewUrl} target='_blank' rel='noreferrer'>
                  {track.artistName}
                </a>
              </li>
            </ul>
          </div>
        </article>

        // <img
        //   key={index}
        //   src={image.artworkUrl100.replace('100x100', '225x225')}
        //   alt={image.artistName}
        // />
      );
    }
  });

  return (
    <div className='itunes'>
      <h3>
        {artistName} {songTitle !== '' ? `- {songTitle}` : ``}
      </h3>
      <div className='grid' data-col='4'>
        {images}
      </div>
    </div>
  );
}

export default ItunesArtistInfo;
