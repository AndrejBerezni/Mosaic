import { displayCurrency } from "../actions/displayCurrencyActions";

interface displayCurrencyState {
  currency: displayCurrency;
}

interface displayCurrencyAction {
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
  state: displayCurrencyState = initialState,
  action: displayCurrencyAction
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
