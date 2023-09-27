import { useEffect, useState } from "react";
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
