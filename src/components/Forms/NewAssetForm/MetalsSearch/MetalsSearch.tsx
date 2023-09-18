import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function MetalsSearch() {
  return (
    <>
      <FloatingLabel label="Select Noble Metal">
        <Form.Select aria-label="select noble metal">
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="platinum">Platinum</option>
        </Form.Select>
      </FloatingLabel>
    </>
  );
}

export default MetalsSearch;
