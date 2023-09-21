import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import showFormReducer from "./showFormReducer";
import darkModeReducer from "./darkModeReducer";
import newAssetTypeReducer from "./newAssetTypeReducer";
import assetListReducer from "./testAssetListReducer";
import displayCurrencyReducer from "./displayCurrencyReducer";
// import totalValueReducer from "./totalValueReducer";

const combinedReducers = combineReducers({
  signedIn: signInReducer,
  showForm: showFormReducer,
  darkMode: darkModeReducer,
  newAssetType: newAssetTypeReducer,
  assetList: assetListReducer,
  displayCurrency: displayCurrencyReducer,
  // totalValue: totalValueReducer,
});

export default combinedReducers;

export type RootState = ReturnType<typeof combinedReducers>;
