import { IDeleteAsset } from "../actions/deleteAssetActions";

interface deleteAssetState {
  show: boolean;
  asset: IDeleteAsset;
}

interface deleteAssetAction {
  type: string;
  payload: IDeleteAsset;
}

const initialState: deleteAssetState = {
  show: false,
  asset: {
    name: "",
  },
};

const deleteAssetReducer = (
  state: deleteAssetState = initialState,
  action: deleteAssetAction
) => {
  switch (action.type) {
    case "SHOW DELETE FORM":
      return {
        show: true,
        asset: action.payload,
      };
    case "HIDE DELETE FORM":
      return {
        ...state,
        show: false,
        asset: {
          name: "",
        },
      };
    default:
      return state;
  }
};

export default deleteAssetReducer;

export type { deleteAssetState };
