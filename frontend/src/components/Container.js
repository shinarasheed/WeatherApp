import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherHistoryChat from './WeatherHistoryChat';
import WeatherPanels from './WeatherPanels';

const Container = () => {
  return (
    <section className="weather container">
      <div className="text-center w-50 m-auto">
        <h5>
          Welcome to Weatherly. Get weather data for any city or your current
          Location. You can also get temperature variation from the last 5 days
        </h5>
      </div>
      <WeatherForm />
      <WeatherPanels />
      <WeatherHistoryChat />
    </section>
  );
};

export default Container;
