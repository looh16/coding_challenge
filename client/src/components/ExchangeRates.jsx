import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { BASE_URL, headers } from "../Url";

const ExchangeRates = (props) => {
    const { currencyCode } = props;
    const [exchangeRates, setExchangeRates] = useState(null);


    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const ratesData = axios.get(
                    `${BASE_URL}/api/currency/exchange/${currencyCode}`,
                    { headers }
                );
                const [rates] = await Promise.all([ratesData]);

                setExchangeRates(rates.data);
            } catch (error) {
                console.error("Error fetching exchange rates:", error.message);
            }
        };

        fetchExchangeRates();
    }, [currencyCode]);

    const ExchangeRatesTable = ({ exchangeRates }) => {
        if (!exchangeRates) {
            return <p>Loading...</p>;
        }

        return (
            <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Currency</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Exchange Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(exchangeRates.rates).map(([currency, rate]) => (
                        <tr key={currency}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{currency}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <ExchangeRatesTable exchangeRates={exchangeRates} />
    );
};

ExchangeRates.propTypes = {
    currencyCode: PropTypes.string,
    exchangeRates: PropTypes.object
};

export default ExchangeRates;
