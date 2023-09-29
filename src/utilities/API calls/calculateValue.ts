import axios from "axios";

interface IAlphaVantageResponse {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
}

const calculateValue = async (
  type: string,
  amount: number,
  code: string,
  displayCurrency: { symbol: string; code: string }
) => {
  switch (type) {
    case "Stock":
      const stockApiKey = "YOUR_API_KEY"; //using demo
      return axios
        .get<IAlphaVantageResponse>(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${code}&apikey=${stockApiKey}`
        )
        .then((response) => {
          const data = response.data;
          const latestDate: string = Object.keys(
            data["Time Series (Daily)"]
          )[0];
          const stockPrice: number = parseFloat(
            data["Time Series (Daily)"][latestDate]["4. close"]
          );
          if (displayCurrency.code !== "USD") {
            //convert price to other currencies
            return axios
              .get(
                `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${displayCurrency.code.toLowerCase()}.json`
              )
              .then((response) => {
                const currencyRate: number =
                  response.data[displayCurrency.code.toLowerCase()];
                return (stockPrice * amount * currencyRate).toFixed(2);
              });
          }
          return (stockPrice * amount).toFixed(2);
        })
        .catch((error) => {
          console.error("Error searching for asset price:", error);
          return "0";
        });
    case "Noble Metal":
      const metalsApiKey = import.meta.env.VITE_GOLD_API_KEY;
      const headers = {
        "x-access-token": metalsApiKey,
        "Content-Type": "application/json",
      };
      return axios
        .get(
          `https://www.goldapi.io/api/${code.toUpperCase()}/${
            displayCurrency.code
          }`,
          {
            headers,
          }
        )
        .then((response) => {
          const metalPrice: number = response.data.price_gram_24k;
          return (metalPrice * amount).toFixed(2);
        })
        .catch((error) => {
          console.error("Error searching for asset price:", error);
          return "0";
        });
    case "Currency":
      return axios
        .get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${code}/${displayCurrency.code.toLowerCase()}.json`
        )
        .then((response) => {
          const currencyPrice: number =
            response.data[displayCurrency.code.toLowerCase()];
          return (currencyPrice * amount).toFixed(2);
        })
        .catch((error) => {
          console.error("Error searching for asset price:", error);
          return "0";
        });
    default:
      return "0";
  }
};

export default calculateValue;
