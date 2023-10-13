import { IDisplayCurrency } from '../actions/displayCurrencyActions';

interface DisplayCurrencyState {
  currency: IDisplayCurrency;
}

interface DisplayCurrencyAction {
  type: string;
  payload: IDisplayCurrency;
}

const initialState = {
  currency: {
    symbol: '€',
    code: 'EUR',
  },
};

const displayCurrencyReducer = (
  state: DisplayCurrencyState = initialState,
  action: DisplayCurrencyAction,
) => {
  switch (action.type) {
    case 'SET DISPLAY CURRENCY':
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
