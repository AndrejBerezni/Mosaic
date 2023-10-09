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

const components = {
  Stock: StockSearch,
  "Noble Metal": MetalsSearch,
  Currency: CurrencySearch,
};

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

  const formComponents = {
    Stock: StockSearch,
    "Noble Metal": MetalsSearch,
    Currency: CurrencySearch,
  };
  const AssetTypeForm = formComponents[assetType as keyof typeof components];

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
            {Object.keys(formComponents).map((assetTypeOption) => (
              <option
                key={assetTypeOption}
                value={assetTypeOption}
                selected={assetType === assetTypeOption}
              >
                {assetTypeOption}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>
      </Form>
      <AssetTypeForm handleClose={handleClose} />
      <AppAlert show={showAlert && alertType === "newAsset" ? true : false} />
    </Modal>
  );
}

export default NewAssetForm;
