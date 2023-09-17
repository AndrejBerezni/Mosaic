import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import showFormReducer from "./showFormReducer";
import darkModeReducer from "./darkModeReducer";

const combinedReducers = combineReducers({
  signedIn: signInReducer,
  showForm: showFormReducer,
  darkMode: darkModeReducer,
});

export default combinedReducers;

export type RootState = ReturnType<typeof combinedReducers>;
