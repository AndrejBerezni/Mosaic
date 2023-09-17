import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/mosaic.png";
import { MoonStars } from "react-bootstrap-icons";
import { CurrencyEuro } from "react-bootstrap-icons";
import { CurrencyDollar } from "react-bootstrap-icons";
import { CurrencyPound } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/combineReducers";

function Nabvar() {
  const isSignedIn = useSelector((state: RootState) => state.signedIn.signedIn);
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
            <Nav.Link href="#link" className="navbar-item">
              <MoonStars />
            </Nav.Link>
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
