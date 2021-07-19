import axios from 'axios';
import baseUrl from '../utils/baseUrl';

const getWeatherData = async (req, res) => {
  try {
    const { city } = req.query;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67a44e7ad76f8a5545839e9dd5d8398f&units=metric`
    );
    const data = await response.data;
    res.status(200).json({ status: 'sucess', data });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'server error' });
    console.log(error.message);
  }
};

const getWeatherCureentLocation = async (req, res) => {};

export default {
  getWeatherData,
  getWeatherCureentLocation,
};
