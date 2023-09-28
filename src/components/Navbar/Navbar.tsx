import "./Navbar.css";
import { useEffect } from "react";
import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import logo from "../../assets/mosaic.png";
import logodark from "../../assets/mosaicdark.png";
import { Moon } from "react-bootstrap-icons";
import { Sun } from "react-bootstrap-icons";
import { CurrencyEuro } from "react-bootstrap-icons";
import { CurrencyDollar } from "react-bootstrap-icons";
import { CurrencyPound } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { darkModeOn, darkModeOff } from "../../actions/darkModeActions";
import { RootState } from "../../reducers/combineReducers";
import { setDisplayCurrency } from "../../actions/displayCurrencyActions";
import { displayCurrency } from "../../actions/displayCurrencyActions";
import { showForm } from "../../actions/showFormActions";
import { signOutAction } from "../../actions/signInActions";
import { signOutUser } from "../../firebase-config";

function Nabvar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const isSignedIn = useSelector((state: RootState) => state.signedIn.signedIn);
  const showSignIn = () => {
    dispatch(showForm("signIn"));
  };

  const handleSignOut = () => {
    dispatch(signOutAction());
    signOutUser();
  };

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    isDarkMode ? dispatch(darkModeOff()) : dispatch(darkModeOn());
  };

  const setCurrency = (currency: displayCurrency) => {
    dispatch(setDisplayCurrency(currency));
  };

  return (
    <Navbar expand="md" sticky="top" id="navbar">
      <Container>
        <Navbar.Brand href="#home" id="title">
          <Image src={isDarkMode ? logodark : logo} id="navbar-logo" />
          Mosaic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="navbar-item">
              {isDarkMode ? (
                <Sun onClick={toggleDarkMode} />
              ) : (
                <Moon onClick={toggleDarkMode} />
              )}
            </Nav.Item>
            <NavDropdown
              title="Currency"
              id="responsive-nav-dropdown"
              className="navbar-item"
            >
              <NavDropdown.Item
                className="currency-selector"
                onClick={() =>
                  setCurrency({
                    symbol: "€",
                    code: "EUR",
                  })
                }
              >
                EUR <CurrencyEuro />
              </NavDropdown.Item>
              <NavDropdown.Item
                className="currency-selector"
                onClick={() =>
                  setCurrency({
                    symbol: "$",
                    code: "USD",
                  })
                }
              >
                USD <CurrencyDollar />
              </NavDropdown.Item>
              <NavDropdown.Item
                className="currency-selector"
                onClick={() =>
                  setCurrency({
                    symbol: "£",
                    code: "GBP",
                  })
                }
              >
                GBP <CurrencyPound />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item
              className="navbar-item"
              onClick={isSignedIn ? handleSignOut : showSignIn}
            >
              {isSignedIn ? "Sign Out" : "Sign In"}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nabvar;
