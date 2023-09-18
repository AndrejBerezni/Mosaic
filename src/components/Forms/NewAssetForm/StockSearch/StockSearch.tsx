import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState, ChangeEvent } from "react";
import "./StockSearch.css";

function StockSearch() {
  const [keywords, setKeywords] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleSearch = () => {
    if (keywords) {
      searchAsset(keywords);
    }
  };
  const searchAsset = (keywords: string) => {
    const apiKey = "YOUR_API_KEY";
    const searchUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;

    axios
      .get(searchUrl)
      .then((response) => {
        const results = response.data.bestMatches || [];
        setSearchResults(results);
        console.log(results);
      })
      .catch((error) => {
        console.error("Error searching for assets:", error);
      });
  };

  return (
    <>
      <FloatingLabel label="Search for Stocks & ETFs" className="my-3">
        <Form.Control onChange={handleInputChange} type="text" />
        <Button
          onClick={handleSearch}
          className="my-2 stock-search-btn"
          style={{ width: "100%" }}
        >
          Search
        </Button>
      </FloatingLabel>
      <FloatingLabel label="Select Asset">
        <Form.Select aria-label="Default select example">
          {searchResults.map((result) => {
            return (
              <option value={result["1. symbol"]} key={result["1. symbol"]}>
                {result["1. symbol"]} - {result["2. name"]}
              </option>
            );
          })}
        </Form.Select>
      </FloatingLabel>
    </>
  );
}

export default StockSearch;
