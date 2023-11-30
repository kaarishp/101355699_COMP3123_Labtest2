import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onCityChange }) => {
  const [cityInput, setCityInput] = useState('');

  const handleInputChange = (event) => {
    setCityInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(cityInput);
    setCityInput('');
  };

  return (
    <div className="search-bar-container"> 
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Enter city name..."
          value={cityInput}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
