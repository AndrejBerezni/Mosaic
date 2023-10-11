import { IDeleteAsset } from '../actions/deleteAssetActions';

interface IDeleteAssetState {
  show: boolean;
  asset: IDeleteAsset;
}

interface IDeleteAssetAction {
  type: string;
  payload: IDeleteAsset;
}

const initialState: IDeleteAssetState = {
  show: false,
  asset: {
    name: '',
  },
};

const deleteAssetReducer = (
  state: IDeleteAssetState = initialState,
  action: IDeleteAssetAction,
) => {
  switch (action.type) {
    case 'SHOW DELETE FORM':
      return {
        show: true,
        asset: action.payload,
      };
    case 'HIDE DELETE FORM':
      return {
        ...state,
        show: false,
        asset: {
          name: '',
        },
      };
    default:
      return state;
  }
};

export default deleteAssetReducer;

export type { IDeleteAssetState };
