const axios = require('axios');
const circularJSON = require('circular-json');
const flatted = require('flatted');
const logger = require('../../logger');

const log = logger.createLogger('population-service');

async function getCountryPopulation(countryCode) {
try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
   // const countryData = response.data[0];
    const countryData = response.data

    const countryInfo = {
        population: countryData.population,
    };

    console.log(countryInfo);

    // Extract the population value from the response
    const population = response;

    // return the population
    return population;
    
} catch (error) {
    log.error('Error fetching population data:', error.message);
}
}

module.exports = { getCountryPopulation };
