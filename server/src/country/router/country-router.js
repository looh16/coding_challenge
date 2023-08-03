const express = require("express");
const HttpStatus = require("http-status-codes");
const router = express.Router();
const countryGDP = require("../service/gdp-service");
const countryPopulation = require("../service/population-service");
const logger = require('../../logger');

const log = logger.createLogger('country-router');

router.get("/gdp/:code", async (req, res) => {
try {
    // get the country param
    const code = req.params.code;

    // call the service to fetch the gdp data from the API
    const gdp = await countryGDP.getCountryGDP(code);

    //check if the gdp is available
    if(!gdp) {
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
        message: "fetch gdp data successfully",
        gdp
    });

} catch (error) {
    log.error("Unable to fetch gdp data:", error.message);
}
});

router.get("/population/:code", async (req, res) => {
    try {
        // get the country param
        const code = req.params.code;
    
        // call the service to fetch the country data from the API
        const details = await countryPopulation.getCountryDetails(code);
    
        //check if the country exists
        if(!details) {
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
            message: "fetch country details data successfully",
            details
        });
    
    } catch (error) {
        log.error("Unable to fetch country details data:", error.message);
    }
    });

module.exports = router;
