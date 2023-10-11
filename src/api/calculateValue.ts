import axios, { AxiosResponse } from 'axios';

const stockApiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
const metalsApiKey = import.meta.env.VITE_GOLD_API_KEY;

const fetchStockPrice = async (
  amount: number,
  code: string,
  displayCurrency: { symbol: string; code: string },
) => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${code}&apikey=${stockApiKey}`,
    );
    const data = response.data;
    const latestDate: string = Object.keys(data['Time Series (Daily)'])[0];
    const stockPrice: number = parseFloat(
      data['Time Series (Daily)'][latestDate]['4. close'],
    );

    if (displayCurrency.code !== 'USD') {
      const currencyResponse: AxiosResponse = await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${displayCurrency.code.toLowerCase()}.json`,
      );
      const currencyRate: number =
        currencyResponse.data[displayCurrency.code.toLowerCase()];
      return (stockPrice * amount * currencyRate).toFixed(2);
    }

    return (stockPrice * amount).toFixed(2);
  } catch (error) {
    console.error('Error searching for asset price:', error);
    return '0';
  }
};

const fetchMetalPrice = async (
  amount: number,
  code: string,
  displayCurrency: { symbol: string; code: string },
) => {
  try {
    const headers = {
      'x-access-token': metalsApiKey,
      'Content-Type': 'application/json',
    };

    const response: AxiosResponse = await axios.get(
      `https://www.goldapi.io/api/${code.toUpperCase()}/${
        displayCurrency.code
      }`,
      {
        headers,
      },
    );

    const metalPrice: number = response.data.price_gram_24k;

    return (metalPrice * amount).toFixed(2);
  } catch (error) {
    console.error('Error searching for asset price:', error);
    return '0';
  }
};

const fetchCurrencyPrice = async (
  amount: number,
  code: string,
  displayCurrency: { symbol: string; code: string },
) => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${code}/${displayCurrency.code.toLowerCase()}.json`,
    );

    const currencyPrice: number =
      response.data[displayCurrency.code.toLowerCase()];

    return (currencyPrice * amount).toFixed(2);
  } catch (error) {
    console.error('Error searching for asset price:', error);
    return '0';
  }
};

const calculateValue = async (
  type: string,
  amount: number,
  code: string,
  displayCurrency: { symbol: string; code: string },
) => {
  switch (type) {
    case 'Stock':
      return fetchStockPrice(amount, code, displayCurrency);

    case 'Noble Metal':
      return fetchMetalPrice(amount, code, displayCurrency);

    case 'Currency':
      return fetchCurrencyPrice(amount, code, displayCurrency);

    default:
      return '0';
  }
};

export default calculateValue;
