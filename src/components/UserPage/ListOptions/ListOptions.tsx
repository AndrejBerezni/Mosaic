import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./ListOptions.css";

function ListOptions() {
  return (
    <Nav
      className="justify-content-start px-lg-5 px-2 filter-sort"
      activeKey="/home"
    >
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
