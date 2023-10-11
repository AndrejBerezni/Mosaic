interface SignedInState {
  signedIn: boolean;
  user: string | null;
}

interface SignInAction {
  type: string;
  payload?: string | null;
}

const initialState: SignedInState = {
  signedIn: false,
  user: null,
};

const signInReducer = (
  state: SignedInState = initialState,
  action: SignInAction,
) => {
  switch (action.type) {
    case 'SIGN IN':
      return {
        ...state,
        signedIn: true,
        user: action.payload,
      };
    case 'SIGN OUT':
      return {
        ...state,
        signedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default signInReducer;

export type { SignedInState };
