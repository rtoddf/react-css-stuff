import React from 'react';
import { GetWeather } from '../../../Apis/Weather';

function Weather() {
  const data = GetWeather();
  const cmgWeather = data;
  let atscWeather = {};

  // current
  if (cmgWeather.length !== 0) {
    atscWeather['location'] = cmgWeather['current']['obs_name'].split('/')[0];
    atscWeather['headerTemp'] = cmgWeather['current']['temp'];
    atscWeather['headerIconCode'] = cmgWeather['current']['wx_icon'].toString();
    atscWeather['headerTitle'] = cmgWeather['current']['wx_phrase'];
  }

  // days
  const cmgForecastDays = cmgWeather['forecast'];

  let days = [];
  for (const property in cmgForecastDays) {
    // console.log('something: ', cmgForecastDays[property]);
    // console.log(`${property}: ${cmgForecastDays[property]}`);
    // console.log('key: ', key)
    // console.log('value: ', cmgForecastDays[property][key])

    let day = {};

    for (const key in cmgForecastDays[property]) {
      // NOTE: dateTime and humidity are hardcoded for now
      day['dateTime'] = 1649073600000;
      day['dayIconCode'] = cmgForecastDays[property]['day']['iconCode'].toString();
      day['nightIconCode'] = cmgForecastDays[property]['night']['iconCode'].toString();
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
    if(property < 12){
      console.log('something: ', cmgForecastHours[property]['dayOfWeek']);

      let hour = {};

      hour['dayOfWeek'] = cmgForecastHours[property]['dayOfWeek'];
      hour['iconCode'] = cmgForecastHours[property]['iconCode'].toString();
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

  console.log('cmgForecastHours: ', cmgForecastHours);
  console.log('atscWeather: ', atscWeather);

  const atscWeatherJson = JSON.stringify(atscWeather);

  return (
    <>
      <h3>Posts</h3>
      {atscWeatherJson}
    </>
  );
}

export default Weather;
