import "./AssetBar.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CardText from "react-bootstrap/CardText";
import Table from "react-bootstrap/Table";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function AssetBar({ assetName, units, totalValue }) {
  return (
    <Card className="asset-bar my-3">
      <Table>
        <tr>
          <th className="asset-bar-text">{assetName}</th>
          <th className="asset-bar-text">crypto</th>
          <th className="asset-bar-text">{units}</th>
          <th className="asset-bar-text">{totalValue}</th>
        </tr>
      </Table>
      <ButtonGroup aria-label="Basic example">
        <Button className="add-units-button asset-bar-btn">Add Units</Button>
        <Button className="remove-units-button asset-bar-btn">
          Remove Units
        </Button>

        <DropdownButton
          className="asset-bar-btn"
          as={ButtonGroup}
          title="Options"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1" className="asset-bar-btn">
            <Button variant="outline-warning">Edit</Button>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" className="asset-bar-btn">
            <Button variant="outline-danger ">Delete</Button>
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </Card>
  );
}

export default AssetBar;
