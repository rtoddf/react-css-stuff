import { useState } from 'react';
import { ItunesData } from '../../../Apis/Itunes';
import './default.scss';

function ItunesImages() {
  const [artistName, setArtistName] = useState('Charlie Puth');
  const [songTitle, setSongTitle] = useState('Marvin Gaye');
  const data = ItunesData(artistName, songTitle, 'musicTrack');

  const images = data.map((image, index) => {
    if (image.kind !== 'music-video' && image.artistName === artistName) {
      return (
        <article key={index} className='panel'>
          <div className='track'>
            <div className='artwork'>
              <img
                key={index}
                src={image.artworkUrl100.replace('100x100', '225x225')}
                alt={artistName}
              />
            </div>
            <ul>
              <li>
                <a href={image.artistViewUrl} target='_blank' rel='noreferrer'>
                  {artistName}
                </a>
              </li>
            </ul>
          </div>
        </article>
      );
    }
  });

  return (
    <div className='itunes'>
      <h3>
        {artistName} {songTitle !== '' ? `- ${songTitle}` : ``}
      </h3>
      <div className='grid' data-col='4'>
        {images}
      </div>
    </div>
  );
}

export default ItunesImages;
