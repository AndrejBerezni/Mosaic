import { useState, useEffect, ChangeEvent, useRef } from "react";
import { Form, FloatingLabel, Button, Modal } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../reducers/combineReducers";
import { refreshAssetList } from "../../../../actions/refreshAssetListActions";
import { IAsset } from "../../../../firebase-config";
import { addNewAsset } from "../../../../firebase-config";
import { showAlert, hideAlert } from "../../../../actions/showAlertActions";

type CurrencyList = Record<string, string>;

interface ICurrencySearchProps {
  handleClose: () => void;
}

function CurrencySearch({ handleClose }: ICurrencySearchProps) {
  const [currencyList, setCurrencyList] = useState<CurrencyList>({});
  const [userInput, setUserInput] = useState<string>("");
  const [matches, setMatches] = useState<[string, string][]>([]);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.signedIn.user);
  const assetRef = useRef<HTMLSelectElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);
  const searchUrl =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

  // Get all available currencies on component render
  useEffect(() => {
    axios
      .get<CurrencyList>(searchUrl)
      .then((response: AxiosResponse<CurrencyList>) => {
        setCurrencyList(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle user input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setUserInput(input);

    // Check if the input matches any key or value in currencyList
    const matchedItems = Object.entries(currencyList).filter(([key, value]) => {
      return (
        key.toLowerCase().includes(input) || value.toLowerCase().includes(input)
      );
    });
    // Return matches
    setMatches(matchedItems);
  };

  const handleSubmit = async () => {
    if (!assetRef.current!.value || !amountRef.current!.value) {
      dispatch(
        showAlert({
          message: "Please select an asset to add.",
          type: "newAsset",
        })
      );
      return;
    }
    const selectedOption = assetRef.current!.value;
    const selectedOptionText =
      assetRef.current!.options[assetRef.current!.selectedIndex].text;
    const selectedAmount = parseFloat(amountRef.current!.value);
    const newAsset: IAsset = {
      uid: user,
      type: "Currency",
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
      <FloatingLabel label="Search for Currency" className="my-3">
        <Form.Control
          onChange={handleInputChange}
          type="text"
          value={userInput}
          placeholder="Search"
        />
      </FloatingLabel>
      <FloatingLabel label="Select Currency">
        <Form.Select
          aria-label="select currency"
          ref={assetRef}
          onChange={() => dispatch(hideAlert())}
        >
          {matches.map(([key, value]) => {
            return (
              <option value={key} key={key}>
                {value}
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

export default CurrencySearch;
