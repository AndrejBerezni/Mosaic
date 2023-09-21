import "./AssetBar.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Table from "react-bootstrap/Table";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";

interface AssetBarProps {
  assetName: string;
  assetType: string;
  units: number;
  assetCode: string;
}

interface AlphaVantageResponse {
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

function AssetBar({ assetName, assetType, units, assetCode }: AssetBarProps) {
  const displayCurrency = useSelector(
    (state: RootState) => state.displayCurrency.currency
  );
  const [totalValue, setTotalValue] = useState<string | number | undefined>();

  const calculateValue = async (type: string, amount: number, code: string) => {
    switch (type) {
      case "Stock":
        const stockApiKey = "YOUR_API_KEY"; //using demo
        return axios
          .get<AlphaVantageResponse>(
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
            return (stockPrice * amount).toFixed(2);
          })
          .catch((error) => {
            console.error("Error searching for asset price:", error);
            return "N/A";
          });
      case "Noble Metal":
        const metalsApiKey = import.meta.env.VITE_GOLD_API_KEY;
        const headers = {
          "x-access-token": metalsApiKey,
          "Content-Type": "application/json",
        };
        return axios
          .get(`https://www.goldapi.io/api/${code}/USD`, { headers })
          .then((response) => {
            const metalPrice: number = response.data.price_gram_24k;
            return (metalPrice * amount).toFixed(2);
          })
          .catch((error) => {
            console.error("Error searching for asset price:", error);
            return "N/A";
          });
      case "Currency":
        return axios
          .get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${code}/usd.json`
          )
          .then((response) => {
            const currencyPrice: number = response.data.usd;
            return (currencyPrice * amount).toFixed(2);
          })
          .catch((error) => {
            console.error("Error searching for asset price:", error);
            return "N/A";
          });
      default:
        return "N/A";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const calculatedValue = await calculateValue(assetType, units, assetCode);
      setTotalValue(calculatedValue);
    };

    fetchData();
  }, [assetType, units, assetCode]);
  return (
    <Card className="asset-bar my-3">
      <Table className="my-2">
        <tr>
          <th className="asset-bar-text">{assetName}</th>
          <th className="asset-bar-text secondary-text">{assetType}</th>
          <th className="asset-bar-text secondary-text">{units}</th>
          <th className="asset-bar-text">
            {totalValue}
            {displayCurrency.symbol}
          </th>
        </tr>
      </Table>
      <ButtonGroup aria-label="Basic example">
        <Button className="add-units-button asset-bar-btn">Add Units</Button>
        <Button className="remove-units-button asset-bar-btn">
          Remove Units
        </Button>
        <DropdownButton
          as={ButtonGroup}
          title="Options"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item>Delete</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </Card>
  );
}

export default AssetBar;
