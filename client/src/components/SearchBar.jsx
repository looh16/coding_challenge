import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/weather/country/${city}`,
        { headers }
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  const handleSearch = () => {
    fetchWeatherData();
  };


  return (
    <div>
      <h2>Weather Information</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      {weather.temperature && (
        <ul>
          <li><p>Temperature: {weather.temperature["temperature"]} &#176;C</p></li>
          <li><p>City Name: {weather.temperature.cityName}</p></li>
        </ul>
        
      )}

    </div>
  );
};

export default SearchBar;
