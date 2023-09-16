import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { hideForm } from "../../../actions/showFormActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";

function NewAssetForm() {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideForm());
  };
  const show = useSelector((state: RootState) => state.showForm.showForm);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      fullscreen="md-down"
      centered={true}
      keyboard={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Asset to Portfolio</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewAssetForm;
