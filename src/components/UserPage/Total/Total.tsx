import "./Total.css";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Total() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary total-wealth"
      fixed="bottom"
    >
      <Container className="justify-content-center">
        <Navbar.Brand id="total-wealth-text">
          Total Worth: <Badge id="total-wealth-number">134000$</Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Total;
