import ListOptions from "./ListOptions/ListOptions";
import AssetBar from "./AssetBar/AssetBar";
import Col from "react-bootstrap/Col";

function UserPage() {
  return (
    <>
      <ListOptions />
      <Col xs lg={8}>
        <AssetBar assetName={"bitcoin"} units={2} totalValue={42600} />
        <AssetBar assetName={"ethereum"} units={66} totalValue={76400} />
        <AssetBar assetName={"xrp"} units={3} totalValue={3.24} />
        <AssetBar assetName={"cardano"} units={408} totalValue={230} />
      </Col>
    </>
  );
}

export default UserPage;
