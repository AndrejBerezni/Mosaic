import "./Navbar.css";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/mosaic.png";
import { Moon } from "react-bootstrap-icons";
import { Sun } from "react-bootstrap-icons";
import { CurrencyEuro } from "react-bootstrap-icons";
import { CurrencyDollar } from "react-bootstrap-icons";
import { CurrencyPound } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { darkModeOn, darkModeOff } from "../../actions/darkModeActions";
import { RootState } from "../../reducers/combineReducers";

function Nabvar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const isSignedIn = useSelector((state: RootState) => state.signedIn.signedIn);

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    isDarkMode ? dispatch(darkModeOff()) : dispatch(darkModeOn());
  };
  return (
    <Navbar expand="md" sticky="top" id="navbar">
      <Container>
        <Navbar.Brand href="#home" id="title">
          <Image src={logo} id="navbar-logo" />
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
              <NavDropdown.Item href="" className="currency-selector">
                EUR <CurrencyEuro />
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="currency-selector">
                USD <CurrencyDollar />
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="currency-selector">
                GBP <CurrencyPound />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className="navbar-item">
              {isSignedIn ? "Sign Out" : "Sign In"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nabvar;
