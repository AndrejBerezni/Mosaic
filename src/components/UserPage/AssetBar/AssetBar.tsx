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
import ConfirmAssetDeletion from "../ConfirmAssetDeletion/ConfirmAssetDeletion";
import { showForm } from "../../../actions/showFormActions";
import EditAssetForm from "../../Forms/EditAssetForm/EditAssetForm";

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

  const showDeletionConfirmation = () => {
    dispatch(showForm("deleteAsset"));
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
      <ConfirmAssetDeletion asset={assetName} />
      <EditAssetForm asset={assetName} amount={units} />
    </>
  );
}

export default AssetBar;
