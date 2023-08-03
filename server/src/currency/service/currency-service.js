const axios = require('axios');
const logger = require('../../logger');

const API_KEY = process.env.EXCHANGE_API_KEY;

const log = logger.createLogger('currency-service');

async function getCurrency(currencyCode) {
try {
    // Fetch the weather data from the API
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyCode}`);
    const rates = response.data.conversion_rates;

    return rates;
    
} catch (error) {
    log.error('Error fetching weather data:', error.message);
}
}

module.exports = { getCurrency };
