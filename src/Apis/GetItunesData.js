import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetItunesData() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        'http://itunes.apple.com/search?term=Charlie+Puth+Marvin+Gaye&entity=musicTrack'
      )
      .then((res) => {
        console.log('res: ', res.data.results);
        setImages(res.data.results);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }, []);

  return (
    <>
      <h1>itunes</h1>
      {images.map((image, index) => (
        <img key={index} src={image.artworkUrl100} alt='name' />
      ))}
    </>
  );
}

export default GetItunesData;
