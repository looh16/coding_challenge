const axios = require('axios');
const logger = require('../../logger');

const API_KEY = process.env.WHEATHER_API_KEY;
const log = logger.createLogger('weather-service');

async function getCityWeatherForecast(city) {
try {
    const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
    )}&appid=${API_KEY}`
    );
    
    return response.data;
} catch (error) {
    log.error('Error fetching weather data:', error.message);
}
}

module.exports = { getCityWeatherForecast };
