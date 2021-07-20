import axios from 'axios';
import baseUrl from '../utils/baseUrl';

const getWeatherData = async (req, res) => {
  const { city } = req.query;
  try {
    const response = await axios.get(
      `${baseUrl}?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const data = await response.data;
    res.status(200).json({ status: 'sucess', data });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'server error' });
    console.log(error.message);
  }
};

const getWeatherCureentLocation = async (req, res) => {
  const { lat, long } = req.query;

  try {
    const response = await axios.get(
      `${baseUrl}?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_API_KEY}&units=metrics`
    );
    const data = await response.data;
    res.status(200).json({ status: 'sucess', data });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'server error' });
    console.log(error.message);
  }
};

export default {
  getWeatherData,
  getWeatherCureentLocation,
};
