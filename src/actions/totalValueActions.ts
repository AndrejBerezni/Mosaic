const recalculateTotalValue = () => {
  return {
    type: "RECALCULATE TOTAL VALUE",
  };
};

const addToTotalValue = (asset: { name: string; value: number }) => {
  return {
    type: "ADD TO TOTAL VALUE",
    payload: asset,
  };
};

const removeFromTotalValue = (value: { name: string }) => {
  return {
    type: "REMOVE FROM TOTAL VALUE",
    payload: value,
  };
};

export { recalculateTotalValue, addToTotalValue, removeFromTotalValue };
