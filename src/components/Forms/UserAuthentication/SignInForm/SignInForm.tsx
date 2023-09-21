import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function SignInForm() {
  return (
    <Container className="my-5">
      <Button className="google-auth-btn">Continue using Google</Button>
      <p className="my-3">or</p>
      <Form className="my-3 mx-5">
        <FloatingLabel label="Email" className="my-3">
          <Form.Control as="input" type="email" />
        </FloatingLabel>
        <FloatingLabel label="Password" className="my-3">
          <Form.Control as="input" type="password" />
        </FloatingLabel>
        <Button className="auth-btn">Sign in</Button>
      </Form>
    </Container>
  );
}

export default SignInForm;
