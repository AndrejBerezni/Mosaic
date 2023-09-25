interface DarkModeState {
  darkMode: boolean;
}

interface DarkModeAction {
  type: string;
}

const initialState: DarkModeState = {
  darkMode: false,
};

const darkModeReducer = (
  state: DarkModeState = initialState,
  action: DarkModeAction
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

export type { DarkModeState };
