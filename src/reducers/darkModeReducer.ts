interface darkModeState {
  darkMode: boolean;
}

interface darkModeAction {
  type: string;
}

const initialState: darkModeState = {
  darkMode: false,
};

const darkModeReducer = (
  state: darkModeState = initialState,
  action: darkModeAction
) => {
  switch (action.type) {
    case "DARK MODE ON":
      return {
        darkMode: true,
      };
    case "DARK MODE OFF":
      return {
        darkMode: false,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
