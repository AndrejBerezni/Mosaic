import { useEffect, useState } from "react";
import "./AssetList.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getAssetsForUser } from "../../../firebase-config";
import { IAsset } from "../../../firebase-config";
import AssetBar from "../AssetBar/AssetBar";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";

function AssetList() {
  const [assetList, setAssetList] = useState<IAsset[]>([]);
  const formChange = useSelector(
    (state: RootState) => state.refreshAssetList.refresh
  );

  useEffect(() => {
    const getAssets = async () => {
      try {
        const newAssetList = await getAssetsForUser();
        setAssetList(newAssetList);
      } catch (error) {
        console.error(error);
      }
    };
    getAssets();
  }, [formChange]);

  return (
    <Container
      fluid
      className="justify-content-center"
      style={{ marginBottom: "132px" }}
    >
      <Row className="justify-content-center mt-0 p-2 asset-legend">
        <Col xs={3} lg={2}>
          <p className="asset-legend-text">Name</p>
        </Col>
        <Col xs={3} lg={2}>
          <p className="asset-legend-text">Type</p>
        </Col>
        <Col xs={3} lg={2}>
          <p className="asset-legend-text">Amount</p>
        </Col>
        <Col xs={3} lg={2}>
          <p className="asset-legend-text">Value</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8}>
          {assetList.map((asset) => (
            <AssetBar
              key={asset.symbol}
              assetName={asset.name}
              assetType={asset.type}
              units={asset.amount}
              assetCode={asset.symbol}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default AssetList;
