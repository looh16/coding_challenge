// weatherService.js
const axios = require('axios');

const API_KEY = process.env.WHEATHER_API_KEY;

async function getCityWeatherForecast(city) {
try {
    const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
    )}&appid=${API_KEY}`
    );
    
    return response.data;
} catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
}
}

module.exports = { getCityWeatherForecast };
