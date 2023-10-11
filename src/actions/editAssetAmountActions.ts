interface IEditAmount {
  name: string;
  amount: number;
}

const showEditAssetAmount = (asset: IEditAmount) => {
  return {
    type: 'SHOW EDIT FORM',
    payload: asset,
  };
};

const hideEditAssetAmount = () => {
  return {
    type: 'HIDE EDIT FORM',
  };
};

export { showEditAssetAmount, hideEditAssetAmount };
export type { IEditAmount };
