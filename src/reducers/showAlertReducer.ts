interface ShowAlertState {
  showAlert: boolean;
  alertMessage: string;
}

interface ShowAlertAction {
  type: string;
  payload: string;
}

const initialState: ShowAlertState = {
  showAlert: false,
  alertMessage: "",
};

const showAlertReducer = (
  state: ShowAlertState = initialState,
  action: ShowAlertAction
) => {
  switch (action.type) {
    case "SHOW ALERT":
      return {
        showAlert: true,
        alertMessage: action.payload,
      };
    case "HIDE ALERT":
      return {
        showAlert: false,
        alertMessage: "",
      };
    default:
      return state;
  }
};

export default showAlertReducer;

export type { ShowAlertState };
