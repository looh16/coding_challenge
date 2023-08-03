const axios = require('axios');
const logger = require('../../logger');

const log = logger.createLogger('population-service');

// Indicator code for population (SP.POP.TOTL)
const indicatorCode = 'SP.POP.TOTL';

async function getCountryPopulation(countryCode) {
try {
    const response = await axios.get(`https://api.worldbank.org/v2/countries/${countryCode}/indicators/${indicatorCode}?format=json`);

    const countryPopulation = response.data[1][0];
    const population = countryPopulation.value

    return population;
    
} catch (error) {
    log.error('Error fetching population data:', error.message);
}
}

module.exports = { getCountryPopulation };
