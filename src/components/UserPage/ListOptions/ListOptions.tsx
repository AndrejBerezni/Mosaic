import './ListOptions.css';
import { Nav, NavDropdown, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { filterAssets } from '../../../actions/filterActions';
import { sortAssets } from '../../../actions/sortActions';
import { refreshAssetList } from '../../../actions/refreshAssetListActions';
import { recalculateTotalValue } from '../../../actions/totalValueActions';
import { RootState } from '../../../reducers/combineReducers';

function ListOptions() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state: RootState) => state.filter);
  const sortValue = useSelector((state: RootState) => state.sort);
  const handleFilterClick = (filter: string) => {
    dispatch(filterAssets(filter));
    dispatch(recalculateTotalValue());
    dispatch(refreshAssetList());
  };
  const handleSortClick = (sort: string) => {
    dispatch(sortAssets(sort));
    dispatch(recalculateTotalValue());
    dispatch(refreshAssetList());
  };

  return (
    <Nav className="justify-content-start px-lg-5 px-2 filter-sort">
      <NavDropdown
        title="Filter"
        className="nav-dropdown filter-sort-dropdown ms-lg-5"
      >
        <NavDropdown.Item onClick={() => handleFilterClick('All')}>
          All
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleFilterClick('Stock')}>
          Stocks
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleFilterClick('Noble Metal')}>
          Noble Metals
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleFilterClick('Currency')}>
          Currencies
        </NavDropdown.Item>
      </NavDropdown>
      <Badge className="me-sm-5 filter-badge">{filterValue}</Badge>
      <NavDropdown title="Sort" className="nav-dropdown filter-sort-dropdown">
        <NavDropdown.Item onClick={() => handleSortClick('A-Z')}>
          A-Z
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleSortClick('Z-A')}>
          Z-A
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleSortClick('Amount Asc.')}>
          Amount ascending
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleSortClick('Amount Desc.')}>
          Amount descending
        </NavDropdown.Item>
      </NavDropdown>
      <Badge className="filter-badge">{sortValue}</Badge>
    </Nav>
  );
}

export default ListOptions;
