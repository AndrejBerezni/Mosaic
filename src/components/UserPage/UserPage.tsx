import ListOptions from "./ListOptions/ListOptions";
import AssetBar from "./AssetBar/AssetBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AddAsset from "./AddAsset/AddAsset";
import Total from "./Total/Total";
import NewAssetForm from "../Forms/NewAssetForm/NewAssetForm";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/combineReducers";

function UserPage() {
  const assetList = useSelector(
    (state: RootState) => state.assetList.assetList
  );
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
                key={asset.code}
                assetName={asset.name}
                assetType={asset.type}
                units={asset.amount}
                assetCode={asset.code}
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
