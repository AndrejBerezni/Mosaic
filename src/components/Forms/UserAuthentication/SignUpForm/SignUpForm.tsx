import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

function SignUpForm() {
  return (
    <Form className="m-5">
      <FloatingLabel label="Enter your Email" className="my-3">
        <Form.Control as="input" type="email" />
      </FloatingLabel>
      <FloatingLabel label="Create Password" className="my-3">
        <Form.Control as="input" type="password" />
      </FloatingLabel>
      <Button className="auth-btn">Sign Up</Button>
    </Form>
  );
}

export default SignUpForm;
