const axios = require('axios');
const logger = require('../../logger');

const API_KEY = process.env.WEATHER_API_KEY;
const log = logger.createLogger('weather-service');

async function getCityWeatherForecast(city) {
try {
    // Fetch the weather data from the API
    const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    // Extract the temperature from the API response in Kelvin
    const temperatureInKelvin = response.data.main.temp;

    // Convert the temperature in Kelvin to Celsius
    const temperatureInCelsius = temperatureInKelvin - 273.15;

    // Round the temperature
    const temperature = Math.round(temperatureInCelsius);

    const temperatureDetails = {
        temperature: temperature,
        countryCode: response.data.sys.country,
        cityName:response.data.name
    };
    
    //return the temperature in Celsius
    return temperatureDetails;
    
} catch (error) {
    log.error('Error fetching weather data:', error.message);
}
}

module.exports = { getCityWeatherForecast };
