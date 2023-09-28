import { IEditAmount } from "../actions/editAssetAmountActions";

interface editAssetAmountState {
  show: boolean;
  asset: IEditAmount;
}

interface editAssetAmountAction {
  type: string;
  payload: IEditAmount;
}

const initialState: editAssetAmountState = {
  show: false,
  asset: {
    name: "",
    amount: 0,
  },
};

const editAssetAmountReducer = (
  state: editAssetAmountState = initialState,
  action: editAssetAmountAction
) => {
  switch (action.type) {
    case "SHOW EDIT FORM":
      return {
        show: true,
        asset: action.payload,
      };
    case "HIDE EDIT FORM":
      return {
        ...state,
        show: false,
        asset: {
          name: "",
          amount: 0,
        },
      };
    default:
      return state;
  }
};

export default editAssetAmountReducer;

export type { editAssetAmountState };
