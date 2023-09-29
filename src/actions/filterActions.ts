const filterAssets = (filter: string) => {
  return {
    type: "SET FILTER",
    payload: filter,
  };
};

export { filterAssets };
