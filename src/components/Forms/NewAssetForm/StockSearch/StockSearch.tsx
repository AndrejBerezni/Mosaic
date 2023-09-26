import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState, ChangeEvent, useRef } from "react";
import "./StockSearch.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reducers/combineReducers";
import { useDispatch } from "react-redux";
import { refreshAssetList } from "../../../../actions/refreshAssetListActions";
import { Asset } from "../../../../firebase-config";
import { addNewAsset } from "../../../../firebase-config";
import { showAlert, hideAlert } from "../../../../actions/showAlertActions";

interface StockSearchProps {
  handleClose: () => void;
}

function StockSearch({ handleClose }: StockSearchProps) {
  const [keywords, setKeywords] = useState<string>("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.signedIn.user);
  const assetRef = useRef<HTMLSelectElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);

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

  const handleSubmit = async () => {
    if (!assetRef.current!.value || !amountRef.current!.value) {
      return;
    }
    const selectedOption = assetRef.current!.value;
    const selectedOptionText =
      assetRef.current!.options[assetRef.current!.selectedIndex].text;
    const selectedAmount = parseFloat(amountRef.current!.value);
    const newAsset: Asset = {
      uid: user,
      type: "Stock",
      amount: selectedAmount,
      name: selectedOptionText,
      symbol: selectedOption,
    };
    try {
      await addNewAsset(newAsset).then((response) =>
        response.success
          ? handleClose()
          : dispatch(showAlert({ message: response.message, type: "newAsset" }))
      );
      dispatch(refreshAssetList());
    } catch (error: any) {
      dispatch(showAlert({ message: error.message, type: "newAsset" }));
    }
  };

  return (
    <Form className="px-3">
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
        <Form.Select
          aria-label="Default select example"
          ref={assetRef}
          onChange={() => dispatch(hideAlert())}
        >
          {searchResults.map((result) => {
            return (
              <option value={result["1. symbol"]} key={result["1. symbol"]}>
                {result["2. name"]}
              </option>
            );
          })}
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel label="Number of Units" className="my-3">
        <Form.Control
          type="number"
          as="input"
          required
          defaultValue={1}
          min={0.00001}
          step={"any"}
          ref={amountRef}
        />
      </FloatingLabel>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="submit-form-btn"
          size="lg"
        >
          <b>SAVE</b>
        </Button>
      </Modal.Footer>
    </Form>
  );
}

export default StockSearch;
