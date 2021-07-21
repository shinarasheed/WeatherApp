import {
  GET_MY_WEATHER_REQUEST,
  GET_MY_WEATHER_SUCCESS,
  GET_MY_WEATHER_FAIL,
} from './actions';

const initialState = {
  myWeatherData: null,
  isLoading: false,
  error: null,
};

export const myWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MY_WEATHER_SUCCESS:
      return {
        ...state,
        myWeatherData: action.payload,
        isLoading: false,
      };

    case GET_MY_WEATHER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default myWeatherReducer;
