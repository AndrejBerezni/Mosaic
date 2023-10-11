import { Alert } from '../actions/showAlertActions';

interface ShowAlertState {
  showAlert: boolean;
  alertMessage: string;
  alertType: string;
}

interface ShowAlertAction {
  type: string;
  payload: Alert;
}

const initialState: ShowAlertState = {
  showAlert: false,
  alertMessage: '',
  alertType: '',
};

const showAlertReducer = (
  state: ShowAlertState = initialState,
  action: ShowAlertAction,
) => {
  switch (action.type) {
    case 'SHOW ALERT':
      return {
        showAlert: true,
        alertMessage: action.payload.message,
        alertType: action.payload.type,
      };
    case 'HIDE ALERT':
      return {
        showAlert: false,
        alertMessage: '',
        alertType: '',
      };
    default:
      return state;
  }
};

export default showAlertReducer;

export type { ShowAlertState };
