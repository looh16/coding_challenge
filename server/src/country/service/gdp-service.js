const axios = require('axios');
const logger = require('../../logger');

const indicatorCode = 'NY.GDP.MKTP.CD';
const log = logger.createLogger('gdp-service');

async function getCountryGDP(countryCode) {
try {
    // Fetch the GDP data from the API
    const response = await axios.get(
        `http://api.worldbank.org/v2/country/${countryCode}/indicator/${indicatorCode}?format=json`
    );

    // Extract the GDP value from the response
    const gdp = response.data[1][0].value;

    // return the GDP
    return gdp;
    
} catch (error) {
    log.error('Error fetching GDP data:', error.message);
}
}

module.exports = { getCountryGDP };
