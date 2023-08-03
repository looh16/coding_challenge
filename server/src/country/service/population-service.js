const axios = require('axios');
const logger = require('../../logger');

const log = logger.createLogger('population-service');

// Indicator code for population (SP.POP.TOTL)
const indicatorCode = 'SP.POP.TOTL';

async function getCountryDetails(countryCode) {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryCode}`);
        const data = response.data;

        const countryDetails = {
            population: data[0].population,
            currency: data[0].currencies,
            currencyCode: Object.keys(data[0].currencies)[0]
        };
        
        return countryDetails;
        
    } catch (error) {
        log.error('Error fetching population data:', error.message);
    }
}

module.exports = { getCountryDetails };
