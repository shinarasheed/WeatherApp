import React from 'react';
import { useSelector } from 'react-redux';

const MyWeather = () => {
  const weather = useSelector((state) => state.myWeather);
  const { myWeatherData, isLoading } = weather;
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <p>Loading...</p>
        </div>
      ) : myWeatherData === null ? (
        <div></div>
      ) : (
        <section className="weather-info">
          <div className="d-flex justify-content-center">
            <h3 style={{ marginRight: '10px' }} className="city-name">
              {myWeatherData.data.name}
            </h3>
            <h3 className="city-name">{myWeatherData.data.sys.country}</h3>
          </div>
          <section className="overcast">
            <img
              src={`http://openweathermap.org/img/wn/${myWeatherData.data.weather[0].icon}@2x.png`}
              className="overcast-img"
              alt="weather icon"
            />
            <span className="overcast-description">
              {myWeatherData.data.weather[0].description}
            </span>
          </section>

          <hr />

          <section className="current-weather">
            <span className="humidity">
              Humidity: {myWeatherData.data.main.humidity}%
            </span>
            <span className="curr-temp">
              Temp: {myWeatherData.data.main.temp}°F
            </span>
            <span className="feels-like">
              Feels like: {myWeatherData.data.main.temp}°F
            </span>
          </section>

          <hr />

          <section className="temps">
            <span className="min-temp">
              Low: {myWeatherData.data.main.temp_min}°F
            </span>
            <span className="max-temp">
              High: {myWeatherData.data.main.temp_max}°F
            </span>
          </section>
        </section>
      )}
    </>
  );
};

export default MyWeather;
