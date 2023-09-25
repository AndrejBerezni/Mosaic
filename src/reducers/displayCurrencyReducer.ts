import { displayCurrency } from "../actions/displayCurrencyActions";

interface DisplayCurrencyState {
  currency: displayCurrency;
}

interface DisplayCurrencyAction {
  type: string;
  payload: displayCurrency;
}

const initialState = {
  currency: {
    symbol: "$",
    code: "USD",
  },
};

const displayCurrencyReducer = (
  state: DisplayCurrencyState = initialState,
  action: DisplayCurrencyAction
) => {
  switch (action.type) {
    case "SET DISPLAY CURRENCY":
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
};

export default displayCurrencyReducer;

export type { DisplayCurrencyState };
