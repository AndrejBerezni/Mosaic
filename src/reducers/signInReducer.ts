interface SignedInState {
  signedIn: boolean;
}

interface SignInAction {
  type: string;
}

const initialState: SignedInState = {
  signedIn: true,
};

const signInReducer = (
  state: SignedInState = initialState,
  action: SignInAction
) => {
  switch (action.type) {
    case "SIGN IN":
      return {
        signedIn: true,
      };
    case "SIGN OUT":
      return {
        signedIn: false,
      };
    default:
      return state;
  }
};

export default signInReducer;
