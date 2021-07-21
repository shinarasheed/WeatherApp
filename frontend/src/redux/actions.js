import axios from 'axios';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAIL = 'GET_WEATHER_FAIL';

export const GET_MY_WEATHER_REQUEST = 'GET_MY_WEATHER_REQUEST';
export const GET_MY_WEATHER_SUCCESS = 'GET_MY_WEATHER_SUCCESS';
export const GET_MY_WEATHER_FAIL = 'GET_MY_WEATHER_FAIL';

export const GET_HISTORY_REQUEST = 'GET_HISTORY_REQUEST';
export const GET_HISTORY_SUCCESS = 'GET_HISTORY_SUCCESS';
export const GET_HISTORY_FAIL = 'GET_HISTORY_FAIL';

export const getWeather = (cityName) => async (dispatch) => {
  let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [];
  try {
    dispatch({
      type: GET_WEATHER_REQUEST,
    });

    const response = await axios.post(`/weather?city=${cityName}`);
    const data = await response.data;

    const savedData = {
      ...data,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };

    itemsArray.push(savedData);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_WEATHER_FAIL,
      payload: 'Please enter a valid city name',
    });
  }
};

export const getMyWeather =
  ({ lat, long }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_MY_WEATHER_REQUEST,
      });

      const response = await axios.post(
        `/weather/myWeather?lat=${lat}&long=${long}`
      );
      const data = await response.data;
      dispatch({
        type: GET_MY_WEATHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_MY_WEATHER_FAIL,
        payload: error,
      });
      console.log(`could not get weather info : ${error}`);
    }
  };

export const getWeatherHistory =
  ({ lat, long, dt = 1626823534 }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_HISTORY_REQUEST,
      });

      const response = await axios.post(
        `/weather/history?lat=${lat}&long=${long}&dt=${dt}`
      );
      const data = await response.data;
      dispatch({
        type: GET_HISTORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_HISTORY_FAIL,
        payload: error,
      });
      console.log(`could not get weather info : ${error}`);
    }
  };
