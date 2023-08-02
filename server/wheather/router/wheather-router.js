const express = require("express");
const HttpStatus = require("http-status-codes");
const router = express.Router();
const weatherService = require("../service/weather-service");

/**
 * http://localhost:5000/api/wheather/country/maputo
 */
router.get("/country/:city", async (req, res) => {
try {
    const city = req.params.city;
    const data = await weatherService.getCityWeatherForecast(city);

    // Extract the temperature from the API response
    const temperatureInKelvin = data.main.temp;

    // Convert the temperature to Celsius
    const temperatureInCelsius = temperatureInKelvin - 273.15;

    // Round the temperature
    const temperature = Math.round(temperatureInCelsius);

    //send the response
    res
    .status(HttpStatus.StatusCodes.ACCEPTED)
    .json({
        message: "fetch weather data successfully",
        temperature
    });

} catch (error) {
    res.status(500).json({ error: "Unable to fetch weather data" });
}
});

module.exports = router;
