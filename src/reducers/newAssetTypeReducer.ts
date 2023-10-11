interface NewAssetTypeState {
  newAssetType: string;
}

interface NewAssetTypeAction {
  type: string;
  payload: string;
}

const initialState = {
  newAssetType: 'Stock',
};

const newAssetTypeReducer = (
  state: NewAssetTypeState = initialState,
  action: NewAssetTypeAction,
) => {
  switch (action.type) {
    case 'SET ASSET TYPE':
      return {
        newAssetType: action.payload,
      };
    default:
      return state;
  }
};

export default newAssetTypeReducer;

export type { NewAssetTypeState };
