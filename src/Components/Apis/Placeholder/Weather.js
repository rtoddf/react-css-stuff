import React from 'react';
import { GetWeather } from '../../../Apis/Weather';

function Weather() {
  const data = GetWeather();
  const cmgWeather = data;
  let atscWeather = {};

  if (cmgWeather.length !== 0) {
    atscWeather['location'] = cmgWeather['current']['obs_name'].split('/')[0];
    atscWeather['headerTemp'] = cmgWeather['current']['temp'];
    atscWeather['headerIconCode'] = cmgWeather['current']['wx_icon'];
    atscWeather['headerTitle'] = cmgWeather['current']['wx_phrase'];
  }

  console.log('cmgWeather: ', cmgWeather);

  // for (const key in cmgWeather) {
  //   console.log('key: ', cmgWeather['current']);
  // }

  console.log('atscWeather: ', atscWeather);

  return (
    <>
      <h3>Posts</h3>
    </>
  );
}

export default Weather;
