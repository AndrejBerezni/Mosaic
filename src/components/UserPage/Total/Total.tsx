import "./Total.css";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";

function Total() {
  const displayCurrencySymbol = useSelector(
    (state: RootState) => state.displayCurrency.currency.symbol
  );
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary total-wealth"
      fixed="bottom"
    >
      <Container className="justify-content-center">
        <Navbar.Brand id="total-wealth-text">
          Total Worth:{" "}
          <Badge id="total-wealth-number">134000{displayCurrencySymbol}</Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Total;
