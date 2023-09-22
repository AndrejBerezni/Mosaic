interface showFormState {
  newAsset: boolean;
  signIn: boolean;
}

interface showFormAction {
  type: string;
  payload: string;
}

const initialState: showFormState = {
  newAsset: false,
  signIn: false,
};

const showFormReducer = (
  state: showFormState = initialState,
  action: showFormAction
) => {
  switch (action.type) {
    case "SHOW FORM":
      return {
        ...state,
        [action.payload]: true,
      };
    case "HIDE FORM":
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default showFormReducer;
