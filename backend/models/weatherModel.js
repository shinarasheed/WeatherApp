import mongoose from 'mongoose';

const WeatherSchema = new mongoose.Schema(
  {
    // zip: Number
    coord: {
      lon: Number,
      lat: Number,
    },
    weather: [
      {
        id: Number,
        main: String,
        description: String,
        icon: String,
      },
    ],
    base: String,
    main: {
      temp: Number,
      feels_like: Number,
      temp_min: Number,
      temp_max: Number,
      pressure: Number,
      humidity: Number,
    },
    visibility: Number,
    wind: {
      speed: Number,
      deg: Number,
      gust: String,
    },

    clouds: {
      all: Number,
    },
    dt: Number,
    sys: {
      type: { type: Number },
      id: Number,
      country: String,
      sunrise: Date,
      sunset: Date,
    },
    timezone: Number,
    id: Number,
    name: String,
    cod: Number,
  },
  { timestamps: true }
);

const Weather = mongoose.model('Weather', WeatherSchema);

export default Weather;
