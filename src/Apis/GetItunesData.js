import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetItunesData() {
  const [images, setImages] = useState([]);
  const [artistName, setArtistName] = useState('Charlie Puth');
  const [songTitle, setSongTitle] = useState('Marvin Gaye');
  const entity = 'musicTrack';

  useEffect(() => {
    axios
      .get(
        `http://itunes.apple.com/search?term=${artistName.replace(
          / /g,
          '+'
        )}+${songTitle.replace(/ /g, '+')}&entity=${entity}`
      )
      .then((res) => {
        console.log('res: ', res.data.results);
        setImages(res.data.results);
        setArtistName(artistName);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }, []);

  return (
    <>
      <h1>{artistName}</h1>
      <p>{songTitle}</p>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.artworkUrl100.replace('100x100', '225x225')}
          alt={image.artistName}
        />
      ))}
    </>
  );
}

export default GetItunesData;
