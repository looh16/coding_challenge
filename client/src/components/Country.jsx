import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import ExchangeRates from './ExchangeRates';
import { BASE_URL, headers } from "../Url";


const Country = props => {
  const { countryCode } = props;
  const [countryDetails, setCountryDetails] = useState(null);
  const [gdpValue, setGdpValue] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const populationPromise = axios.get(
          `${BASE_URL}/api/country/population/${countryCode}`,
          { headers }
        );

        const gdpPromise = axios.get(
          `${BASE_URL}/api/country/gdp/${countryCode}`,
          { headers }
        );

        const [populationResponse, gdpResponse] = await Promise.all([populationPromise, gdpPromise]);

        setCountryDetails(populationResponse.data);
        setGdpValue(gdpResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchCountryData();
  }, [countryCode]);

  const calculateGdp = () => {

    if (!gdpValue.gdp || !countryDetails.details.population) {
      return null;
    }

    return gdpValue.gdp / countryDetails.details.population;
  };

  return (
    <div>
      <h2>Country Information</h2>
      {countryDetails && (
        <div>
          <p>Population: {countryDetails.details.population}</p>
          <p>GDP per capita: {calculateGdp()}</p>
          <h2>Exchange Rates</h2>
          <ul>
            <li>
              <ExchangeRates currencyCode={countryDetails.details.currencyCode} />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

Country.propTypes = {
  countryCode: PropTypes.string
}

export default Country