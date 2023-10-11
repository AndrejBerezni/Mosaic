import { useRef } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signInAction } from '../../../../actions/signInActions';
import { signUpWithEmail } from '../../../../firebase-config';
import { hideForm } from '../../../../actions/showFormActions';
import { showAlert } from '../../../../actions/showAlertActions';
import formatFirebaseError from '../../../../utilities/formatFirebaseError';

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleEmailSignUp = async () => {
    if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {
      dispatch(
        showAlert({ message: 'Passwords do not match', type: 'signin' }),
      );
      return;
    }
    try {
      const user = await signUpWithEmail(
        emailRef.current!.value.trim().toLowerCase(), //assert that is not null
        passwordRef.current!.value, //assert that is not null
      );
      dispatch(signInAction(user));
      dispatch(hideForm('signIn'));
      navigate('/portfolio');
    } catch (error: any) {
      const formattedErrorMessage = formatFirebaseError(error!.message);
      dispatch(showAlert({ message: formattedErrorMessage, type: 'signin' }));
    }
  };
  return (
    <Form className="m-5">
      <FloatingLabel label="Enter your Email" className="my-3">
        <Form.Control
          as="input"
          type="email"
          ref={emailRef}
          placeholder="Email"
        />
      </FloatingLabel>
      <FloatingLabel label="Create Password" className="my-3">
        <Form.Control
          as="input"
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />
      </FloatingLabel>
      <FloatingLabel label="Confirm Password" className="my-3">
        <Form.Control
          as="input"
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
        />
      </FloatingLabel>
      <Button className="auth-btn" onClick={handleEmailSignUp}>
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUpForm;
