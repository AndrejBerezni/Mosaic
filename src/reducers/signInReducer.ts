interface SignedInState {
  signedIn: boolean;
  user: string;
}

interface SignInAction {
  type: string;
  payload?: string;
}

const initialState: SignedInState = {
  signedIn: false,
  user: "",
};

const signInReducer = (
  state: SignedInState = initialState,
  action: SignInAction
) => {
  switch (action.type) {
    case "SIGN IN":
      return {
        ...state,
        signedIn: true,
        user: action.payload,
      };
    case "SIGN OUT":
      return {
        ...state,
        signedIn: false,
        user: "",
      };
    default:
      return state;
  }
};

export default signInReducer;
