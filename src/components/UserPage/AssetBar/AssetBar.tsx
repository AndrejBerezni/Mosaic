import "./AssetBar.css";
import { Card, Button, ButtonGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import calculateValue from "../../../utilities/API calls/calculateValue";
import { showDeleteAsset } from "../../../actions/deleteAssetActions";
import { showEditAssetAmount } from "../../../actions/editAssetAmountActions";
import {
  addToTotalValue,
  recalculateTotalValue,
} from "../../../actions/totalValueActions";
import abbreviateValue from "../../../utilities/helpers/abbreviateValue";

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
  const [assetValue, setAssetValue] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const calculatedValue = await calculateValue(
        assetType,
        units,
        assetCode,
        displayCurrency
      );
      const parsedValue = parseFloat(calculatedValue);
      setAssetValue(parsedValue);
      dispatch(addToTotalValue({ name: assetName, value: parsedValue }));
      dispatch(recalculateTotalValue());
    };
    fetchData();
  }, [units, displayCurrency]);

  const showDeletionConfirmation = () => {
    dispatch(showDeleteAsset({ name: assetName }));
  };

  const showEditAsset = () => {
    dispatch(showEditAssetAmount({ name: assetName, amount: units }));
  };

  return (
    <>
      <Card className="asset-bar my-3">
        <Row className="py-2">
          <Col className="asset-bar-col">
            <p className="asset-bar-text">{assetName}</p>
          </Col>
          <Col className="asset-bar-col">
            <p className="asset-bar-text secondary-text">{assetType}</p>
          </Col>
          <Col className="asset-bar-col">
            <p className="asset-bar-text secondary-text">
              {abbreviateValue(units!)}
            </p>
          </Col>
          <Col className="asset-bar-col">
            <p className="asset-bar-text">
              {abbreviateValue(assetValue!)}
              {displayCurrency.symbol}
            </p>
          </Col>
        </Row>
        <ButtonGroup aria-label="Basic example">
          <Button
            className="edit-units-button asset-bar-btn"
            onClick={showEditAsset}
          >
            Edit Amount
          </Button>
          <Button
            className="delete-asset-button asset-bar-btn"
            onClick={showDeletionConfirmation}
          >
            Delete Asset
          </Button>
        </ButtonGroup>
      </Card>
    </>
  );
}

export default AssetBar;
