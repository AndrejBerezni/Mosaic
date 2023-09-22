import { useRef } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { signInAction } from "../../../../actions/signInActions";
import { useNavigate } from "react-router-dom";
import { signUpWithEmail } from "../../../../firebase-config";
import { hideForm } from "../../../../actions/showFormActions";

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleEmailSignUp = async () => {
    if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {
      return;
    }
    try {
      const user = await signUpWithEmail(
        emailRef.current!.value, //assert that is not null
        passwordRef.current!.value //assert that is not null
      );
      dispatch(signInAction(user));
      dispatch(hideForm("signIn"));
      navigate("/portfolio");
    } catch (error) {
      throw error;
    }
  };
  return (
    <Form className="m-5">
      <FloatingLabel label="Enter your Email" className="my-3">
        <Form.Control as="input" type="email" ref={emailRef} />
      </FloatingLabel>
      <FloatingLabel label="Create Password" className="my-3">
        <Form.Control as="input" type="password" ref={passwordRef} />
      </FloatingLabel>
      <FloatingLabel label="Confirm Password" className="my-3">
        <Form.Control as="input" type="password" ref={confirmPasswordRef} />
      </FloatingLabel>
      <Button className="auth-btn" onClick={handleEmailSignUp}>
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUpForm;
