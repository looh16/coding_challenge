const express = require("express");
const router = express.Router();
const weatherService = require("../service/weather-service");

/**
 * http://localhost:5000/api/wheather/country/maputo
 */
router.get("/country/:city", async (req, res) => {
    try {
        const city = req.params.city;
        const data = await weatherService.getCityWeatherForecast(city);
    
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch weather data' });
}
})

module.exports = router;