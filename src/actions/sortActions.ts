const sortAssets = (sort: string) => {
  return {
    type: 'SET SORT',
    payload: sort,
  };
};

export { sortAssets };
