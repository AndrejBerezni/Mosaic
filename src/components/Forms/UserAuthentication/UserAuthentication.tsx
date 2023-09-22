import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import "./UserAuthentication.css";
import CloseButton from "react-bootstrap/CloseButton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/combineReducers";
import { hideForm } from "../../../actions/showFormActions";
import { hideAlert } from "../../../actions/showAlertActions";
import AuthAlert from "./AuthAlert/AuthAlert";

function UserAuthentication() {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.showForm.signIn);
  const handleClose = () => {
    dispatch(hideForm("signIn"));
    dispatch(hideAlert());
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      fullscreen="md-down"
      centered={true}
      keyboard={true}
      id="user-auth-form"
    >
      <CloseButton id="auth-close-btn" onClick={handleClose} />
      <Tabs
        variant="underline"
        defaultActiveKey="signIn"
        id="uncontrolled-tab"
        className="m-3"
      >
        <Tab eventKey="signIn" title="Sign In" className="auth-tab">
          <SignInForm />
        </Tab>
        <Tab eventKey="signUp" title="Sign Up" className="auth-tab">
          <SignUpForm />
        </Tab>
      </Tabs>
      <AuthAlert />
    </Modal>
  );
}

export default UserAuthentication;
