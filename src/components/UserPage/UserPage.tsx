import ListOptions from "./ListOptions/ListOptions";
import AssetBar from "./AssetBar/AssetBar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AddAsset from "./AddAsset/AddAsset";

function UserPage() {
  return (
    <>
      <ListOptions />
      <Container fluid>
        <Col lg={8}>
          <AssetBar assetName={"bitcoin"} units={2} totalValue={42600} />
          <AssetBar assetName={"ethereum"} units={66} totalValue={76400} />
          <AssetBar assetName={"xrp"} units={3} totalValue={3.24} />
          <AssetBar assetName={"cardano"} units={408} totalValue={230} />
          <AddAsset />
        </Col>
      </Container>
    </>
  );
}

export default UserPage;
