interface ShowFormState {
  newAsset: boolean;
  signIn: boolean;
}

interface ShowFormAction {
  type: string;
  payload: string;
}

const initialState: ShowFormState = {
  newAsset: false,
  signIn: false,
};

const showFormReducer = (
  state: ShowFormState = initialState,
  action: ShowFormAction
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

export type { ShowFormState };
