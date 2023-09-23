import ListOptions from "./ListOptions/ListOptions";
import AssetBar from "./AssetBar/AssetBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AddAsset from "./AddAsset/AddAsset";
import Total from "./Total/Total";
import NewAssetForm from "../Forms/NewAssetForm/NewAssetForm";
import { useEffect, useState } from "react";
import { getAssetsForUser } from "../../firebase-config";
import { Asset } from "../../firebase-config";

function UserPage() {
  const [assetList, setAssetList] = useState<Asset[]>([]);

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
  }, []);
  return (
    <>
      <ListOptions />
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
      <AddAsset />
      <Total />
      <NewAssetForm />
    </>
  );
}

export default UserPage;
