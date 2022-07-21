import React from 'react';
import { GetWeather } from '../../../Apis/Weather';

function Weather() {
  const cmgWeather = GetWeather();
  let atscWeather = {};

  console.log('cmgWeather: ', cmgWeather)

  // current
  if (cmgWeather.length !== 0) {
    atscWeather['location'] = cmgWeather['current']['obs_name'].split('/')[0];
    atscWeather['headerTemp'] = cmgWeather['current']['temp'];
    atscWeather['headerIconCode'] = convertIcons(cmgWeather['current']['wx_icon']);
    // atscWeather['headerIconCode'] = cmgWeather['current']['wx_icon'];
    atscWeather['headerTitle'] = cmgWeather['current']['wx_phrase'];
  }

  function convertIcons(code) {
    const cmgIcons = [26];

    if (parseInt(code) < 50) {
      return '69';
    } else if (parseInt(code) >= 50) {
      return '87';
    } else if (code == null) {
      return '92';
    } else {
      return code
    }

    // console.log('code: ', code)
    // console.log('code: ', typeof code)

    // let newIconCode;

    // switch(code) {
    //   case parseInt(code) < 50:
    //     newIconCode = 66
    //     break;
    //   case parseInt(code) >= 50:
    //     newIconCode = 87
    //     break;
    //   default:
    //     newIconCode = code
    // }

    // return newIconCode;
  }

  // days
  const cmgForecastDays = cmgWeather['forecast'];

  let days = [];
  for (const property in cmgForecastDays) {
    let day = {};

    for (const key in cmgForecastDays[property]) {
      // NOTE: dateTime and humidity are hardcoded for now
      day['dateTime'] = new Date(cmgForecastDays[property]['validTimeLocal']).getTime();
      day['dayIconCode'] = convertIcons(cmgForecastDays[property]['day']['iconCode']);
      day['nightIconCode'] = cmgForecastDays[property]['night']['iconCode'];
      day['title'] = cmgForecastDays[property]['day']['wxPhraseShort'];
      day['hiTemp'] = cmgForecastDays[property]['temperatureMax'];
      day['lowTemp'] = cmgForecastDays[property]['temperatureMin'];
      day['precipitation'] = cmgForecastDays[property]['day']['precipChance'];
      day['wind'] = cmgForecastDays[property]['day']['windSpeed'];
      day['windDirection'] = cmgForecastDays[property]['day']['windDirectionCardinal'];
      day['humidity'] = 39;
      day['ultraviolet'] = cmgForecastDays[property]['day']['uvDescription'];
    }

    days.push(day)
  }

  if(days.length !== 0){ atscWeather['days'] = days };

  // hours
  const cmgForecastHours = cmgWeather['hourly'];
  let hourlyForecasts = [];

  for (const property in cmgForecastHours) {
    if(property < 24){
      let hour = {};

      hour['dayOfWeek'] = cmgForecastHours[property]['dayOfWeek'];
      hour['iconCode'] = convertIcons(cmgForecastHours[property]['iconCode']);
      hour['title'] = cmgForecastHours[property]['wxPhraseLong'];
      hour['temp'] = cmgForecastHours[property]['temperature'];
      hour['precipitation'] = cmgForecastHours[property]['precipChance'];
      hour['wind'] = cmgForecastHours[property]['windSpeed'];
      hour['windDirection'] = cmgForecastHours[property]['windDirectionCardinal'];
      hour['humidity'] = 51;
      hour['ultraviolet'] = cmgForecastHours[property]['uvDescription'];
      hour['heatIndex'] = cmgForecastHours[property]['dayOfWeek'];

      hourlyForecasts.push(hour)
    }
  }

  if(hourlyForecasts.length !== 0){ atscWeather['hourlyForecasts'] = hourlyForecasts };

  // console.log('cmgForecastHours: ', cmgForecastHours);
  // console.log('atscWeather: ', atscWeather);

  const atscWeatherJson = JSON.stringify(atscWeather);

  return (
    <>
      <h3>Posts</h3>
      {atscWeatherJson}
    </>
  );
}

export default Weather;
