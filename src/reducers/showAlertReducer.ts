interface showAlertState {
  showAlert: boolean;
  alertMessage: string;
}

interface showAlertAction {
  type: string;
  payload: string;
}

const initialState: showAlertState = {
  showAlert: false,
  alertMessage: "",
};

const showAlertReducer = (
  state: showAlertState = initialState,
  action: showAlertAction
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
