import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const WeatherHistoryChat = () => {
  const weatherHistory = useSelector((state) => state.weatherHistory);
  const { weatherData, isLoading } = weatherHistory;

  let barData = [];
  let barLabel = [];

  if (weatherData !== null) {
    barLabel = weatherData.data.hourly.map(
      (data) => data.weather[0].description
    );
    barData = weatherData.data.hourly.map((data) => data.humidity);
  }

  console.log(barLabel);
  console.log(barData);

  const data = {
    labels: barLabel,
    datasets: [
      {
        label: 'Temperature Data',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.1,
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: barData,
      },
    ],
  };

  return (
    <>
      <>
        {isLoading ? (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        ) : weatherData ? (
          <div style={{ height: '400px' }}>
            <h2>Temperature Variation for the past 5 daays</h2>
            <Line
              data={data}
              width={100}
              height={40}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        ) : null}
      </>
    </>
  );
};

export default WeatherHistoryChat;
