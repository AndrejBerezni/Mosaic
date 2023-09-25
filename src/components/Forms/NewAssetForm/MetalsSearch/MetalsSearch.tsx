import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MetalsSearch() {
  return (
    <Form className="px-3">
      <FloatingLabel label="Select Noble Metal">
        <Form.Select aria-label="select noble metal">
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
        />
      </FloatingLabel>
      <Modal.Footer>
        <Button
          variant="primary"
          // onClick={handleClose}
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
