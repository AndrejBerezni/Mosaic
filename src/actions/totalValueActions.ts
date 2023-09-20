const resetTotalValue = () => {
  return {
    type: "RESET TOTAL VALUE",
  };
};

const addToTotalValue = (value: number) => {
  return {
    type: "ADD TO TOTAL VALUE",
    payload: value,
  };
};

export { resetTotalValue, addToTotalValue };
