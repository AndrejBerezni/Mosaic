import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import showFormReducer from "./showFormReducers";

const combinedReducers = combineReducers({
  signedIn: signInReducer,
  showForm: showFormReducer,
});

export default combinedReducers;

export type RootState = ReturnType<typeof combinedReducers>;
