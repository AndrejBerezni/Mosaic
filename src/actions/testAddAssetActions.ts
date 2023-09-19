interface NewAsset {
  type: string;
  code: string;
  name: string;
  amount: number;
}

const addNewAsset = (asset: NewAsset) => {
  return {
    type: "ADD NEW ASSET",
    payload: asset,
  };
};

export { addNewAsset };
export type { NewAsset };
