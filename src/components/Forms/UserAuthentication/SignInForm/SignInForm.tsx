import { useRef } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import google from "../../../../assets/google.png";
import Image from "react-bootstrap/Image";
import { signInWithGoogle, signInWithEmail } from "../../../../firebase-config";
import { useDispatch } from "react-redux";
import { signInAction } from "../../../../actions/signInActions";
import { useNavigate } from "react-router-dom";
import { hideForm } from "../../../../actions/showFormActions";
import { showAlert } from "../../../../actions/showAlertActions";

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        dispatch(signInAction(user));
        dispatch(hideForm("signIn"));
        navigate("/portfolio");
      }
    } catch (error) {
      console.error("Sign in failed");
    }
  };

  const handleEmailSignIn = async () => {
    try {
      const user = await signInWithEmail(
        emailRef.current!.value.trim().toLowerCase(), //assert that is not null
        passwordRef.current!.value //assert that is not null
      );
      dispatch(signInAction(user));
      dispatch(hideForm("signIn"));
      navigate("/portfolio");
    } catch (error: any) {
      dispatch(showAlert({ message: error!.message, type: "signin" }));
    }
  };

  return (
    <Container className="my-5">
      <Button className="google-auth-btn" onClick={handleGoogleSignIn}>
        <Image src={google} id="google-icon"></Image>Sign in with Google
      </Button>
      <p className="my-3">or</p>
      <Form className="my-3 mx-5">
        <FloatingLabel label="Email" className="my-3">
          <Form.Control as="input" type="email" ref={emailRef} />
        </FloatingLabel>
        <FloatingLabel label="Password" className="my-3">
          <Form.Control as="input" type="password" ref={passwordRef} />
        </FloatingLabel>
        <Button className="auth-btn" onClick={handleEmailSignIn}>
          Sign in
        </Button>
      </Form>
    </Container>
  );
}

export default SignInForm;
