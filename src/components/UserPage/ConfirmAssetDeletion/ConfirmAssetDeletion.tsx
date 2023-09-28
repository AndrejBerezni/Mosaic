import Modal from "react-bootstrap/Modal";
import "./ConfirmAssetDeletion.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideDeleteAsset } from "../../../actions/deleteAssetActions";
import { deleteAsset } from "../../../firebase-config";
import { RootState } from "../../../reducers/combineReducers";
import { refreshAssetList } from "../../../actions/refreshAssetListActions";
import {
  removeFromTotalValue,
  recalculateTotalValue,
} from "../../../actions/totalValueActions";

function ConfirmAssetDeletion() {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.deleteAsset.show);
  const asset = useSelector((state: RootState) => state.deleteAsset.asset.name);
  const handleClose = () => {
    dispatch(hideDeleteAsset());
  };
  const handleConfirmation = async () => {
    await deleteAsset(asset);
    dispatch(removeFromTotalValue({ name: asset }));
    dispatch(recalculateTotalValue());
    dispatch(refreshAssetList());
    handleClose();
  };
  return (
    <Modal
      size={"lg"}
      centered={true}
      show={show}
      id="delete-asset-confirmation"
    >
      <Modal.Body>
        Are you sure you want to delete {asset}?
        <div>
          <Button
            onClick={handleConfirmation}
            className="delete-asset-btn-yes m-3"
          >
            Yes
          </Button>
          <Button onClick={handleClose} className="delete-asset-btn-no m-3">
            No
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ConfirmAssetDeletion;
