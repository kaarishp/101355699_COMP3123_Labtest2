import React from 'react';
import './WeatherDisplay.css'; 

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind, dt, main: { humidity, pressure, temp_max, temp_min }} = data;
  const date = new Date(dt * 1000); 

  return (
    <div className="weather-display-container"> 
      <div className="weather-display">
        <h2>{name}</h2>
        <div>
          <p>Date: {date.toLocaleDateString()}</p>
          <p>Temperature: {Math.round(main.temp - 273.15)}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={weather[0].description}
          />
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {wind.speed} km/h</p>
          <p>Air Pressure: {pressure} mb</p>
          <p>Max Temperature: {Math.round(temp_max - 273.15)}°C</p>
          <p>Min Temperature: {Math.round(temp_min - 273.15)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
