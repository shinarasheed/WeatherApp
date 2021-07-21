import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getWeather, getMyWeather, getWeatherHistory } from '../redux/actions';

const WeatherFormSecond = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  let dt;

  const handleOnsubmit = (e) => {
    e.preventDefault();
    dispatch(getWeather(city));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  const handleGetWeather = () => {
    dispatch(getMyWeather({ lat, long }));
  };

  const handleGetWeatherHistory = () => {
    dispatch(getWeatherHistory({ lat, long, dt }));
  };

  return (
    <section className="forms-container">
      <div className="d-flex gap-3">
        <Button onClick={() => handleGetWeather()}>Get Weather</Button>
        <Button onClick={() => handleGetWeatherHistory()}>
          Get Temp Variatn From 5 days
        </Button>
      </div>
      <div>
        <Form className="city-weather" onSubmit={handleOnsubmit}>
          <Form.Control
            name="city"
            value={city}
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
          />
          <Button style={{ marginLeft: '5px' }} type="submit">
            send
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default WeatherFormSecond;
