import "./AssetBar.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CardText from "react-bootstrap/CardText";
import Table from "react-bootstrap/Table";

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
        <Button className="asset-bar-btn" variant="warning">
          Edit
        </Button>
        <Button className="asset-bar-btn" variant="danger">
          Remove
        </Button>
        <Button className="add-units-button asset-bar-btn">+</Button>
        <Button className="remove-units-button asset-bar-btn">-</Button>
      </ButtonGroup>
    </Card>
  );
}

export default AssetBar;
