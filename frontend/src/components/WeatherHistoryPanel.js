import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function WeatherHistoryPanel() {
  const searchHistory = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [];
  return (
    <>
      {searchHistory.length > 0 ? (
        <div>
          <div className="d-flex justify-content-between align-items-end">
            <h5>Search History</h5>

            <Button className="mb-2" onClick={() => localStorage.clear()}>
              Clear History
            </Button>
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Time</th>
                <th>City</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              {searchHistory.map((item, index) => {
                const { data, date, time } = item;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{data.name}</td>
                    <td>{data.weather[0].description}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : null}
    </>
  );
}
