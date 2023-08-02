const express = require("express");
const HttpStatus = require("http-status-codes");
const router = express.Router();
const weatherService = require("../service/weather-service");
const logger = require('../../logger');

const log = logger.createLogger('weather-router');

router.get("/country/:city", async (req, res) => {
try {
    // get the city param
    const city = req.params.city;

    // call the service to fetch the weather data from the API
    const temperature = await weatherService.getCityWeatherForecast(city);

    //check if the temperature is available
    if(!temperature) {
        res
        .status(HttpStatus.StatusCodes.NOT_FOUND)
        .json({
            message: "not found"
        });
        return false;
    }
    //send the response
    res
    .status(HttpStatus.StatusCodes.ACCEPTED)
    .json({
        message: "fetch weather data successfully",
        temperature
    });

} catch (error) {
    log.error("Unable to fetch weather data:", error.message);
}
});

module.exports = router;
