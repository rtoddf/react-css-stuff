import { useState, useEffect } from 'react';
import axios from 'axios';

export function ItunesData(artist, song, entity) {
  const [data, setData] = useState([]);
  const [artistName, setArtistName] = useState(artist);
  const songTitle = song;

  useEffect(() => {
    axios
      .get(
        `http://itunes.apple.com/search?term=${artistName.replace(
          / /g,
          '+'
        )}+${songTitle.replace(/ /g, '+')}&entity=${entity}`
      )
      .then((res) => {
        // console.log('res: ', res.data.results);
        setData(res.data.results);
        setArtistName(artistName);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }, [artistName, entity, songTitle]);

  return data;
}
