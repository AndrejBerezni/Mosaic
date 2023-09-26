import { useRef } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addNewAsset } from "../../../../firebase-config";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reducers/combineReducers";
import { useDispatch } from "react-redux";
import { refreshAssetList } from "../../../../actions/refreshAssetListActions";
import { Asset } from "../../../../firebase-config";
import { showAlert, hideAlert } from "../../../../actions/showAlertActions";

interface MetalsSearchProps {
  handleClose: () => void;
}

function MetalsSearch({ handleClose }: MetalsSearchProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.signedIn.user);
  const assetRef = useRef<HTMLSelectElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async () => {
    if (!assetRef.current!.value || !amountRef.current!.value) {
      return;
    }
    const selectedOption = assetRef.current!.value;
    const selectedOptionText =
      assetRef.current!.options[assetRef.current!.selectedIndex].text;
    const selectedAmount = parseFloat(amountRef.current!.value);

    const newAsset: Asset = {
      uid: user,
      type: "Noble Metal",
      amount: selectedAmount,
      name: selectedOptionText,
      symbol: selectedOption,
    };
    try {
      await addNewAsset(newAsset).then((response) =>
        response.success
          ? handleClose()
          : dispatch(showAlert({ message: response.message, type: "newAsset" }))
      );
      dispatch(refreshAssetList());
    } catch (error: any) {
      dispatch(showAlert({ message: error.message, type: "newAsset" }));
    }
  };
  return (
    <Form className="px-3">
      <FloatingLabel label="Select Noble Metal">
        <Form.Select
          aria-label="select noble metal"
          ref={assetRef}
          onChange={() => dispatch(hideAlert())}
        >
          <option value="xau">Gold</option>
          <option value="xag">Silver</option>
          <option value="xpt">Platinum</option>
          <option value="xpd">Paladium</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel label="Number of grams" className="my-3">
        <Form.Control
          type="number"
          as="input"
          required
          defaultValue={1}
          min={0.00001}
          step={"any"}
          ref={amountRef}
        />
      </FloatingLabel>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="submit-form-btn"
          size="lg"
        >
          <b>SAVE</b>
        </Button>
      </Modal.Footer>
    </Form>
  );
}

export default MetalsSearch;
