import "./AddAsset.css";
import Button from "react-bootstrap/Button";

function AddAsset() {
  return (
    <div className="d-grid gap-2" id="add-asset-btn-div">
      <Button variant="primary" size="lg" id="add-asset-btn">
        + Add Asset
      </Button>
    </div>
  );
}

export default AddAsset;
