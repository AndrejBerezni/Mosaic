import Modal from "react-bootstrap/Modal";
import "./ConfirmAssetDeletion.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideForm } from "../../../actions/showFormActions";
import { deleteAsset } from "../../../firebase-config";
import { RootState } from "../../../reducers/combineReducers";
import { refreshAssetList } from "../../../actions/refreshAssetListActions";

interface IConfirmAssetDeletionProps {
  asset: string;
}

function ConfirmAssetDeletion({ asset }: IConfirmAssetDeletionProps) {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.showForm.deleteAsset);
  const handleClose = () => {
    dispatch(hideForm("deleteAsset"));
  };
  const handleConfirmation = async () => {
    await deleteAsset(asset);
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
        Are you sure you want to delete this asset?
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
