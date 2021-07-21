import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherHistoryChat from './WeatherHistoryChat';
import WeatherPanels from './WeatherPanels';

const Container = () => {
  return (
    <section className="weather container">
      <WeatherForm />
      <WeatherPanels />
      <WeatherHistoryChat />
    </section>
  );
};

export default Container;
