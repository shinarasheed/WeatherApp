import {
  GET_HISTORY_REQUEST,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAIL,
} from './actions';

const initialState = {
  weatherData: null,
  isLoading: false,
  error: null,
};

export const weatherHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
      };

    case GET_HISTORY_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default weatherHistoryReducer;
