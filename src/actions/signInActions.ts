const signInAction = (user: string) => {
  return {
    type: 'SIGN IN',
    payload: user,
  };
};

const signOutAction = () => {
  return {
    type: 'SIGN OUT',
  };
};

export { signInAction, signOutAction };
