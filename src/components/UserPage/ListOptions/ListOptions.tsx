import "./ListOptions.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterAssets } from "../../../actions/filterActions";
import { refreshAssetList } from "../../../actions/refreshAssetListActions";
import { recalculateTotalValue } from "../../../actions/totalValueActions";

function ListOptions() {
  const dispatch = useDispatch();

  const handleFilterClick = (filter: string) => {
    dispatch(filterAssets(filter));
    dispatch(recalculateTotalValue());
    dispatch(refreshAssetList());
  };

  return (
    <Nav className="justify-content-start px-lg-5 px-2 filter-sort">
      <NavDropdown
        title="Filter"
        className="nav-dropdown filter-sort-dropdown mx-lg-5"
      >
        <NavDropdown.Item onClick={() => handleFilterClick("all")}>
          All
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleFilterClick("Stock")}>
          Stocks
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleFilterClick("Noble Metal")}>
          Noble Metals
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleFilterClick("Currency")}>
          Currencies
        </NavDropdown.Item>
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
