import "./NewAssetForm.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { hideForm } from "../../../actions/showFormActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import StockSearch from "./StockSearch/StockSearch";
import MetalsSearch from "./MetalsSearch/MetalsSearch";
import CurrencySearch from "./CurrencySearch/CurrencySearch";
import { newAssetType } from "../../../actions/newAssetTypeActions";

function NewAssetForm() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideForm());
  };

  const show = useSelector((state: RootState) => state.showForm.showForm);

  const assetType = useSelector(
    (state: RootState) => state.newAssetType.newAssetType
  );

  const changeAssetType = (asset: string) => {
    dispatch(newAssetType(asset));
  };

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
          <Form.Select
            aria-label="asset type"
            onChange={(e) => {
              changeAssetType(e.target.value);
            }}
          >
            <option value="Stock">Stocks</option>
            <option value="Noble Metal">Noble Metals</option>
            <option value="Currency">Currency</option>
          </Form.Select>
        </FloatingLabel>

        {assetType === "stocks" ? (
          <StockSearch />
        ) : assetType === "metal" ? (
          <MetalsSearch />
        ) : (
          <CurrencySearch />
        )}

        <FloatingLabel
          label={`Number of ${assetType === "metal" ? "Grams" : "Units"}`}
          className="my-3"
        >
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
          size="lg"
        >
          <b>SAVE</b>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewAssetForm;
