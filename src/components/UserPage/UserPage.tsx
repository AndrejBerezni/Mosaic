import ListOptions from "./ListOptions/ListOptions";
import AssetBar from "./AssetBar/AssetBar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AddAsset from "./AddAsset/AddAsset";
import Total from "./Total/Total";
import NewAssetForm from "../Forms/NewAssetForm/NewAssetForm";

function UserPage() {
  return (
    <>
      <ListOptions />
      <Container fluid style={{ marginBottom: "132px" }}>
        <Col lg={8}>
          <AssetBar
            assetName={"bitcoin"}
            assetType={"crypto"}
            units={2}
            totalValue={42600}
          />
          <AssetBar
            assetName={"ethereum"}
            assetType={"crypto"}
            units={66}
            totalValue={76400}
          />
          <AssetBar
            assetName={"xrp"}
            assetType={"crypto"}
            units={3}
            totalValue={3.24}
          />
          <AssetBar
            assetName={"cardano"}
            assetType={"crypto"}
            units={408}
            totalValue={230}
          />
        </Col>
      </Container>
      <AddAsset />
      <Total />
      <NewAssetForm />
    </>
  );
}

export default UserPage;
