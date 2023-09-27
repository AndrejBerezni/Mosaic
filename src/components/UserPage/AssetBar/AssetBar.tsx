import "./AssetBar.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import calculateValue from "../../../utilities/API calls/calculateValue";
import { deleteAsset } from "../../../firebase-config";
import { refreshAssetList } from "../../../actions/refreshAssetListActions";

interface IAssetBarProps {
  assetName: string;
  assetType: string;
  units: number;
  assetCode: string;
}

function AssetBar({ assetName, assetType, units, assetCode }: IAssetBarProps) {
  const dispatch = useDispatch();
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
      <Row className="py-2">
        <Col className="asset-bar-col">
          <p className="asset-bar-text">{assetName}</p>
        </Col>
        <Col className="asset-bar-col">
          <p className="asset-bar-text secondary-text">{assetType}</p>
        </Col>
        <Col className="asset-bar-col">
          <p className="asset-bar-text secondary-text">{units}</p>
        </Col>
        <Col className="asset-bar-col">
          <p className="asset-bar-text">
            {assetValue}
            {displayCurrency.symbol}
          </p>
        </Col>
      </Row>
      <ButtonGroup aria-label="Basic example">
        <Button className="edit-units-button asset-bar-btn">
          Edit Number of Units
        </Button>
        <Button
          className="delete-asset-button asset-bar-btn"
          onClick={async () => {
            await deleteAsset(assetName);
            dispatch(refreshAssetList());
          }}
        >
          Delete Asset
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default AssetBar;
