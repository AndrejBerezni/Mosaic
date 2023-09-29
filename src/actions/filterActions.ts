const fitlerAssets = (filter: string) => {
  return {
    type: "SET FILTER",
    payload: filter,
  };
};

export { fitlerAssets };
