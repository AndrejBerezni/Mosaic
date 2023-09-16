const signIn = () => {
  return {
    type: "SIGN IN",
  };
};

const signOut = () => {
  return {
    type: "SIGN OUT",
  };
};

export { signIn, signOut };
