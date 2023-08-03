const express = require("express");
const HttpStatus = require("http-status-codes");
const router = express.Router();
const localExchange = require("../service/currency-service");
const logger = require('../../logger');

const log = logger.createLogger('currency-router');


router.get("/exchange/:code", async (req, res) => {
    try {
        // get the code param
        const currencyCode = req.params.code;
    
        // call the service to fetch the rates data from the API
        const rates = await localExchange.getCurrency(currencyCode);
    
        //check if the rates is available
        if(!rates) {
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
            message: "fetch rate data successfully",
            rates
        });
    
    } catch (error) {
        log.error("Unable to fetch rate data:", error.message);
    }
})

module.exports = router;