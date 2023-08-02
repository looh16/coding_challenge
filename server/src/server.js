require('dotenv').config();
const express = require("express");
const app = express();
const logger = require('./logger');
const currencyRouter = require("./currency/currency-router");
const wheatherRouter = require("./weather/router/weather-router");
const countryRouter = require("./country/country-router");

const log = logger.createLogger('server');

const PORT = 5000;

app.use("/api/currency", currencyRouter);
app.use("/api/weather", wheatherRouter);
app.use("/api/country", countryRouter);

app.listen(5000, () => {
    log.info(`listening on port ${PORT}`);
})
