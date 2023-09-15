import "./AssetBar.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Table from "react-bootstrap/Table";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

interface AssetBarProps {
  assetName: string;
  units: number;
  totalValue: number;
}

function AssetBar({ assetName, units, totalValue }: AssetBarProps) {
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
          as={ButtonGroup}
          title="Options"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item>Delete</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </Card>
  );
}

export default AssetBar;
