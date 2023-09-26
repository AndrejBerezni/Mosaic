import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/combineReducers";
import { hideAlert } from "../../actions/showAlertActions";

interface AppAlertProps {
  show: boolean;
}

function AppAlert({ show }: AppAlertProps) {
  const dispatch = useDispatch();
  // const show = useSelector((state: RootState) => state.showAlert.showAlert);
  // const type = useSelector((state: RootState) => state.showAlert.alertType);
  const message = useSelector(
    (state: RootState) => state.showAlert.alertMessage
  );

  const handleCloseAlert = () => {
    dispatch(hideAlert());
  };
  return (
    <Alert
      show={show}
      onClose={handleCloseAlert}
      variant="danger"
      dismissible={true}
      className="mx-3"
    >
      {message}
    </Alert>
  );
}

export default AppAlert;
