import React from 'react';
import WeatherInfoPanel from './WeatherInfoPanel';
import MyWeather from './MyWeather';

const WeatherData = () => {
  return (
    <section>
      <div>
        <MyWeather />
      </div>
      <div>
        <WeatherInfoPanel />
      </div>
    </section>
  );
};

export default WeatherData;
