import React from 'react';
import WeatherData from './WeatherData';
import WeatherHistoryPanel from './WeatherHistoryPanel';

const WeatherPanels = () => {
  return (
    <section className="weather-panels">
      <WeatherData />
      <WeatherHistoryPanel />
    </section>
  );
};

export default WeatherPanels;
