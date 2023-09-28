import "./EditAssetForm.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState, ChangeEvent } from "react";

interface IEditAssetFormProps {
  asset: string;
  amount: number;
}
function EditAssetForm({ asset, amount }: IEditAssetFormProps) {
  const [units, setUnits] = useState(amount);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUnits(parseFloat(e.target.value));
  };
  return (
    <Modal
      size={"lg"}
      centered={true}
      show={true}
      id="edit-asset-amount"
      keyboard={true}
      fullscreen="md-down"
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Asset Amount</Modal.Title>
      </Modal.Header>
      <Form className="pb-4 px-3">
        <FloatingLabel label="Number of Units" className="my-3">
          <Form.Control
            type="number"
            as="input"
            required
            min={0.00001}
            step={"any"}
            value={units}
            onChange={handleChange}
          />
        </FloatingLabel>
        <Button variant="primary" className="submit-form-btn" size="lg">
          <b>Update {asset}</b>
        </Button>
      </Form>
    </Modal>
  );
}

export default EditAssetForm;
