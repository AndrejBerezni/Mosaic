import { useState, useEffect, ChangeEvent } from "react";
import axios, { AxiosResponse } from "axios";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type CurrencyList = Record<string, string>;

function CurrencySearch() {
  const [currencyList, setCurrencyList] = useState<CurrencyList>({});
  const [userInput, setUserInput] = useState<string>("");
  const [matches, setMatches] = useState<[string, string][]>([]);

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

  return (
    <Form className="px-3">
      <FloatingLabel label="Search for Currency" className="my-3">
        <Form.Control
          onChange={handleInputChange}
          type="text"
          value={userInput}
        />
      </FloatingLabel>
      <FloatingLabel label="Select Currency">
        <Form.Select aria-label="Default select example">
          {matches.map(([key, value]) => {
            return (
              <option value={value} key={key}>
                {key.toUpperCase()} - {value}
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
        />
      </FloatingLabel>
      <Modal.Footer>
        <Button
          variant="primary"
          // onClick={handleClose}
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
