import "./ListOptions.css";
import { Nav, NavDropdown } from "react-bootstrap";

function ListOptions() {
  return (
    <Nav className="justify-content-start px-lg-5 px-2 filter-sort">
      <NavDropdown
        title="Filter"
        className="nav-dropdown filter-sort-dropdown mx-lg-5"
      >
        <NavDropdown.Item>All</NavDropdown.Item>
        <NavDropdown.Item>Stocks</NavDropdown.Item>
        <NavDropdown.Item>Cash</NavDropdown.Item>
        <NavDropdown.Item>Noble Metals</NavDropdown.Item>
        <NavDropdown.Item>Crypto</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Reset</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Sort" className="nav-dropdown filter-sort-dropdown">
        <NavDropdown.Item>A-Z</NavDropdown.Item>
        <NavDropdown.Item>Z-A</NavDropdown.Item>
        <NavDropdown.Item>Value ascending</NavDropdown.Item>
        <NavDropdown.Item>Value descending</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default ListOptions;
