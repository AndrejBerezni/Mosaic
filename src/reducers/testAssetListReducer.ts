import { NewAsset } from "../actions/testAddAssetActions";

interface assetListState {
  assetList: NewAsset[];
}

interface assetListAction {
  type: string;
  payload: NewAsset;
}

const initialState = {
  assetList: [
    {
      type: "Currency",
      code: "btc",
      name: "Bitcoin",
      amount: 2,
    },
    // {
    //   type: "Noble Metal",
    //   code: "XAU",
    //   name: "Gold",
    //   amount: 1,
    // },
    // {
    //   type: "Noble Metal",
    //   code: "XPT",
    //   name: "Platinum",
    //   amount: 1,
    // },
    // {
    //   type: "Noble Metal",
    //   code: "XAG",
    //   name: "Silver",
    //   amount: 1,
    // },
    // {
    //   type: "Stock",
    //   code: "ibm",
    //   name: "IBM",
    //   amount: 12,
    // },
  ],
};

const assetListReducer = (
  state: assetListState = initialState,
  action: assetListAction
) => {
  switch (action.type) {
    case "ADD NEW ASSET":
      return {
        ...state,
        assetList: [...state.assetList, action.payload],
      };
    default:
      return state;
  }
};

export default assetListReducer;
