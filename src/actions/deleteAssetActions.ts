interface IDeleteAsset {
  name: string;
}

const showDeleteAsset = (asset: IDeleteAsset) => {
  return {
    type: "SHOW DELETE FORM",
    payload: asset,
  };
};

const hideDeleteAsset = () => {
  return {
    type: "HIDE DELETE FORM",
  };
};

export { showDeleteAsset, hideDeleteAsset };
export type { IDeleteAsset };
