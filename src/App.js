import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay.js';
import './App.css'; 
import Header from './Header';

const API_KEY = 'cfc20795ff9f469f47af975f8d556142';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto');

  useEffect(() => {
    fetchData();
  }, [city]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  };

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar className="search-display-container" onCityChange={handleCityChange} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
