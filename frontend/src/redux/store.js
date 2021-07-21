import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { weatherReducer } from './weatherReducer';
import { myWeatherReducer } from './myWeatherReducer';
import { weatherHistoryReducer } from './weatherHistoryReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  myWeather: myWeatherReducer,
  weatherHistory: weatherHistoryReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
