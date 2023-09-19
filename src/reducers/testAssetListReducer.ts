import { NewAsset } from "../actions/testAddAssetActions";

interface assetListState {
  assetList: NewAsset[];
}

interface assetListAction {
  type: string;
  payload: NewAsset;
}

const initialState = {
  assetList: [],
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
