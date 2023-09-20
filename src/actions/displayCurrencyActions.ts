interface displayCurrency {
  symbol: string;
  code: string;
}

const setDisplayCurrency = (currency: displayCurrency) => {
  return {
    type: "SET DISPLAY CURRENCY",
    payload: currency,
  };
};

export { setDisplayCurrency };
export type { displayCurrency };
