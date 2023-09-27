import "./AssetBar.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Table from "react-bootstrap/Table";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import calculateValue from "../../../utilities/API calls/calculateValue";

interface AssetBarProps {
  assetName: string;
  assetType: string;
  units: number;
  assetCode: string;
}

function AssetBar({ assetName, assetType, units, assetCode }: AssetBarProps) {
  const displayCurrency = useSelector(
    (state: RootState) => state.displayCurrency.currency
  );
  const [assetValue, setAssetValue] = useState<string | number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const calculatedValue = await calculateValue(
        assetType,
        units,
        assetCode,
        displayCurrency
      );
      setAssetValue(calculatedValue);
    };

    fetchData();
  }, [assetType, units, assetCode, displayCurrency]);
  return (
    <Card className="asset-bar my-3">
      <Table className="my-2">
        <tr>
          <th className="asset-bar-text">{assetName}</th>
          <th className="asset-bar-text secondary-text">{assetType}</th>
          <th className="asset-bar-text secondary-text">{units}</th>
          <th className="asset-bar-text">
            {assetValue}
            {displayCurrency.symbol}
          </th>
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
