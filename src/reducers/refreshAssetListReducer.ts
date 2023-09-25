interface RefreshAssetListState {
  refresh: boolean;
}

interface RefreshAssetListAction {
  type: string;
}

const initialState = {
  refresh: true,
};

const refreshAssetListReducer = (
  state: RefreshAssetListState = initialState,
  action: RefreshAssetListAction
) => {
  switch (action.type) {
    case "REFRESH ASSET LIST":
      return {
        ...state,
        refresh: !state.refresh,
      };
    default:
      return state;
  }
};

export default refreshAssetListReducer;

export type { RefreshAssetListState };
