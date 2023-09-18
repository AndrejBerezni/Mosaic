import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import showFormReducer from "./showFormReducer";
import darkModeReducer from "./darkModeReducer";
import newAssetTypeReducer from "./newAssetTypeReducer";

const combinedReducers = combineReducers({
  signedIn: signInReducer,
  showForm: showFormReducer,
  darkMode: darkModeReducer,
  newAssetType: newAssetTypeReducer,
});

export default combinedReducers;

export type RootState = ReturnType<typeof combinedReducers>;
