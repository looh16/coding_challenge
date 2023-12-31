require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const logger = require('./logger');
const currencyRouter = require("./currency/router/currency-router");
const weatherRouter = require("./weather/router/weather-router");
const countryRouter = require("./country/router/country-router");

const log = logger.createLogger('server');

const PORT = 5000;

app.use("/api/currency", currencyRouter);
app.use("/api/weather", weatherRouter);
app.use("/api/country", countryRouter);

app.listen(5000, () => {
    log.info(`listening on port ${PORT}`);
})
