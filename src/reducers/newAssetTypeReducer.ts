interface newAssetTypeState {
  newAssetType: string;
}

interface newAssetTypeAction {
  type: string;
  payload: string;
}

const initialState = {
  newAssetType: "stocks",
};

const newAssetTypeReducer = (
  state: newAssetTypeState = initialState,
  action: newAssetTypeAction
) => {
  switch (action.type) {
    case "SET ASSET TYPE":
      return {
        newAssetType: action.payload,
      };
    default:
      return state;
  }
};

export default newAssetTypeReducer;
