interface totalValueState {
  total: number;
}

interface totalValueAction {
  type: string;
  payload?: number;
}

const initialState = {
  total: 0,
};

const totalValueReducer = (
  state: totalValueState = initialState,
  action: totalValueAction
) => {
  switch (action.type) {
    case "RESET TOTAL VALUE":
      return {
        total: 0,
      };
    case "ADD TO TOTAL VALUE":
      return {
        ...state,
        total: state.total + (action.payload || 0),
      };
    default:
      state;
  }
};

export default totalValueReducer;
