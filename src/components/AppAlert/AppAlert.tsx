import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../reducers/combineReducers';
import { hideAlert } from '../../actions/showAlertActions';

interface IAppAlertProps {
  show: boolean;
}

function AppAlert({ show }: IAppAlertProps) {
  const dispatch = useDispatch();
  const message = useSelector(
    (state: RootState) => state.showAlert.alertMessage,
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
