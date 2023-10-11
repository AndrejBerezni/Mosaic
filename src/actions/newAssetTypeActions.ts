const newAssetType = (asset: string) => {
  return {
    type: 'SET ASSET TYPE',
    payload: asset,
  };
};

export { newAssetType };
