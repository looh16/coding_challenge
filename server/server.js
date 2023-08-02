const express = require("express");
const app = express();
const currencyRouter = require("./currency/currency-router");
const wheatherRouter = require("./wheather/wheather-router");
const countryRouter = require("./country/country-router");

const PORT = 5000;

app.use("/api/currency", currencyRouter);
app.use("/api/wheather", wheatherRouter);
app.use("/api/country", countryRouter);

app.listen(5000, () => {
    console.log(`listening on port ${PORT}`);
})