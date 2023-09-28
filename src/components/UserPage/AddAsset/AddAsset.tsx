import "./AddAsset.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showForm } from "../../../actions/showFormActions";
import { RootState } from "../../../reducers/combineReducers";

function AddAsset() {
  const dispatch = useDispatch();
  const formVisible = useSelector(
    (state: RootState) => state.showForm.newAsset
  );

  const handleClick = () =>
    formVisible ? null : dispatch(showForm("newAsset"));
  return (
    <div className="d-grid gap-2" id="add-asset-btn-div">
      <Button
        variant="primary"
        size="lg"
        id="add-asset-btn"
        onClick={handleClick}
      >
        + Add Asset
      </Button>
    </div>
  );
}

export default AddAsset;
