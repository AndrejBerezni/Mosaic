import "./AuthAlert.css";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../reducers/combineReducers";
import { hideAlert } from "../../../../actions/showAlertActions";

function AuthAlert() {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.showAlert.showAlert);
  const type = useSelector((state: RootState) => state.showAlert.alertType);
  const message = useSelector(
    (state: RootState) => state.showAlert.alertMessage
  );

  const handleCloseAlert = () => {
    dispatch(hideAlert());
  };
  return (
    <Alert
      show={show && type === "signin" ? true : false}
      onClose={handleCloseAlert}
      variant="danger"
      dismissible={true}
      id="app-alert"
      className="mx-3"
    >
      {message}
    </Alert>
  );
}

export default AuthAlert;
