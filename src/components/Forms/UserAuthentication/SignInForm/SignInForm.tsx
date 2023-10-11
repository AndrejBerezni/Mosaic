import { useRef } from "react";
import { Form, FloatingLabel, Button, Container, Image } from "react-bootstrap";
import google from "../../../../assets/google.png";
import { signInWithGoogle, signInWithEmail } from "../../../../firebase-config";
import { useDispatch } from "react-redux";
import { signInAction } from "../../../../actions/signInActions";
import { useNavigate } from "react-router-dom";
import { hideForm } from "../../../../actions/showFormActions";
import { showAlert } from "../../../../actions/showAlertActions";
import formatFirebaseError from "../../../../utilities/formatFirebaseError";

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
      const formattedErrorMessage = formatFirebaseError(error!.message);
      dispatch(showAlert({ message: formattedErrorMessage, type: "signin" }));
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
          <Form.Control
            as="input"
            type="email"
            ref={emailRef}
            placeholder="Email"
          />
        </FloatingLabel>
        <FloatingLabel label="Password" className="my-3">
          <Form.Control
            as="input"
            type="password"
            ref={passwordRef}
            placeholder="Password"
          />
        </FloatingLabel>
        <Button className="auth-btn" onClick={handleEmailSignIn}>
          Sign in
        </Button>
      </Form>
    </Container>
  );
}

export default SignInForm;
