import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import google from "../../../../assets/google.png";
import Image from "react-bootstrap/Image";
import { signInWithGoogle } from "../../../../firebase-config";

function SignInForm() {
  return (
    <Container className="my-5">
      <Button className="google-auth-btn" onClick={signInWithGoogle}>
        <Image src={google} id="google-icon"></Image>Sign in with Google
      </Button>
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
