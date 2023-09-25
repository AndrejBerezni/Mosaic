import { combineReducers } from "redux";
import signInReducer, { SignedInState } from "./signInReducer";
import showFormReducer, { ShowFormState } from "./showFormReducer";
import darkModeReducer, { DarkModeState } from "./darkModeReducer";
import newAssetTypeReducer, { NewAssetTypeState } from "./newAssetTypeReducer";
import displayCurrencyReducer, {
  DisplayCurrencyState,
} from "./displayCurrencyReducer";
import showAlertReducer, { ShowAlertState } from "./showAlertReducer";
import refreshAssetListReducer, {
  RefreshAssetListState,
} from "./refreshAssetListReducer";

const combinedReducers = combineReducers({
  signedIn: signInReducer,
  showForm: showFormReducer,
  darkMode: darkModeReducer,
  newAssetType: newAssetTypeReducer,
  displayCurrency: displayCurrencyReducer,
  showAlert: showAlertReducer,
  refreshAssetList: refreshAssetListReducer,
});

export default combinedReducers;

export type RootState = {
  signedIn: SignedInState;
  showForm: ShowFormState;
  darkMode: DarkModeState;
  newAssetType: NewAssetTypeState;
  displayCurrency: DisplayCurrencyState;
  showAlert: ShowAlertState;
  refreshAssetList: RefreshAssetListState;
};
