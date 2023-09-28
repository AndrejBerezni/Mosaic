import "./NewAssetForm.css";
import { Modal, Form, FloatingLabel } from "react-bootstrap";
import { hideForm } from "../../../actions/showFormActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import StockSearch from "./StockSearch/StockSearch";
import MetalsSearch from "./MetalsSearch/MetalsSearch";
import CurrencySearch from "./CurrencySearch/CurrencySearch";
import { newAssetType } from "../../../actions/newAssetTypeActions";
import AppAlert from "../../AppAlert/AppAlert";
import { hideAlert } from "../../../actions/showAlertActions";

function NewAssetForm() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideForm("newAsset"));
    dispatch(hideAlert());
  };

  const show = useSelector((state: RootState) => state.showForm.newAsset);
  const showAlert = useSelector(
    (state: RootState) => state.showAlert.showAlert
  );
  const alertType = useSelector(
    (state: RootState) => state.showAlert.alertType
  );
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
              dispatch(hideAlert());
            }}
          >
            <option
              value="Stock"
              defaultChecked
              selected={assetType === "Stock" ? true : false} //adding this to prevent wrong component loading below when form is closed and reopened
            >
              Stocks
            </option>
            <option
              value="Noble Metal"
              selected={assetType === "Noble Metal" ? true : false}
            >
              Noble Metals
            </option>
            <option
              value="Currency"
              selected={assetType === "Currency" ? true : false}
            >
              Currency
            </option>
          </Form.Select>
        </FloatingLabel>
      </Form>
      {assetType === "Stock" ? (
        <StockSearch handleClose={handleClose} />
      ) : assetType === "Noble Metal" ? (
        <MetalsSearch handleClose={handleClose} />
      ) : (
        <CurrencySearch handleClose={handleClose} />
      )}
      <AppAlert show={showAlert && alertType === "newAsset" ? true : false} />
    </Modal>
  );
}

export default NewAssetForm;
