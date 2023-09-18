import "./NewAssetForm.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { hideForm } from "../../../actions/showFormActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import StockSearch from "./StockSearch/StockSearch";

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
      id="new-asset-form"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Asset to Portfolio</Modal.Title>
      </Modal.Header>
      <Form className="p-3">
        <FloatingLabel label="Asset Type" className="my-3">
          <Form.Select aria-label="asset type">
            <option value="stocks">Stocks</option>
            <option value="metal">Noble Metal</option>
            <option value="cash">Cash</option>
            <option value="crypto">Crypto</option>
          </Form.Select>
        </FloatingLabel>
        <StockSearch />
        <FloatingLabel label="Number of Units" className="my-3">
          <Form.Control
            type="number"
            as="input"
            required
            defaultValue={1}
            min={0.00001}
            step={"any"}
          />
        </FloatingLabel>
      </Form>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleClose}
          className="submit-form-btn"
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewAssetForm;
