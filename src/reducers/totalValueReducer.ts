interface ITotalValueState {
  total: number;
  assets: { [key: string]: number };
}

interface ITotalValueAction {
  type: string;
  payload?: { name: string; value?: number };
}

const initialState = {
  total: 0,
  assets: {},
};

const totalValueReducer = (
  state: ITotalValueState = initialState,
  action: ITotalValueAction,
) => {
  switch (action.type) {
    case 'RECALCULATE TOTAL VALUE':
      return {
        ...state,
        total: Object.values(state.assets).reduce(
          (a: number, b: number) => a + b,
          0,
        ),
      };
    case 'ADD TO TOTAL VALUE':
      const increasedAssets: { [key: string]: number } = { ...state.assets };
      increasedAssets[action.payload!.name] = action.payload!.value!;
      const increasedTotal = Object.values(state.assets).reduce(
        (a: number, b: number) => a + b,
        0,
      );
      return {
        total: increasedTotal,
        assets: { ...increasedAssets },
      };
    case 'REMOVE FROM TOTAL VALUE':
      const newAssets: { [key: string]: number } = { ...state.assets };
      delete newAssets[action!.payload!.name];
      const newTotal = Object.values(newAssets).reduce(
        (a: number, b: number) => a + b,
        0,
      );
      return {
        total: newTotal,
        assets: { ...newAssets },
      };
    default:
      return state;
  }
};

export default totalValueReducer;

export type { ITotalValueState };
