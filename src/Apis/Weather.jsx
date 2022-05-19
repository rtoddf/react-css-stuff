import { useState, useEffect } from 'react';
import axios from 'axios';

export function GetWeather() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios
        .get('https://www.wsbtv.com/pf/api/v3/content/fetch/weather-api?query=%7B%22metCollectionAlias%22%3A%22met-forecast%22%2C%22website%22%3A%22cmg-tv-10010%22%2C%22zipCode%22%3A%2230309%22%7D&d=393&_website=cmg-tv-10010')
        .then((res) => {
          // console.log('res: ', res.data);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    }, []);

  return posts;
}
