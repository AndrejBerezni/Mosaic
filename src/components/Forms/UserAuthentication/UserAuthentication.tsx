import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import "./UserAuthentication.css";
import CloseButton from "react-bootstrap/CloseButton";

function UserAuthentication() {
  return (
    <Modal
      show={true}
      //   onHide={handleClose}
      fullscreen="md-down"
      centered={true}
      keyboard={true}
      id="user-auth-form"
    >
      <CloseButton id="auth-close-btn" />
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
    </Modal>
  );
}

export default UserAuthentication;
