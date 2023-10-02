import "./EditAssetForm.css";
import { Form, Modal, Button, FloatingLabel } from "react-bootstrap";
import { FormEvent, useRef } from "react";
import { editAssetAmount } from "../../../firebase-config";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import { refreshAssetList } from "../../../actions/refreshAssetListActions";
import { hideEditAssetAmount } from "../../../actions/editAssetAmountActions";

function EditAssetForm() {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.editAssetAmount.show);
  const asset = useSelector(
    (state: RootState) => state.editAssetAmount.asset.name
  );
  const amount = useSelector(
    (state: RootState) => state.editAssetAmount.asset.amount
  );
  const newAmount = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await editAssetAmount(asset, parseFloat(newAmount.current!.value));
    dispatch(refreshAssetList());
    dispatch(hideEditAssetAmount());
  };

  const handleClose = () => {
    dispatch(hideEditAssetAmount());
  };

  return (
    <Modal
      size={"lg"}
      centered={true}
      show={show}
      id="edit-asset-amount"
      keyboard={true}
      fullscreen="md-down"
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit {asset} Amount</Modal.Title>
      </Modal.Header>
      <Form className="pb-4 px-3" onSubmit={handleSubmit}>
        <FloatingLabel label="Number of Units" className="my-3">
          <Form.Control
            type="number"
            as="input"
            required
            min={0.00001}
            step={"any"}
            defaultValue={amount}
            ref={newAmount}
          />
        </FloatingLabel>
        <Button
          type="submit"
          variant="primary"
          className="submit-form-btn"
          size="lg"
        >
          <b>Update</b>
        </Button>
      </Form>
    </Modal>
  );
}

export default EditAssetForm;
