interface IDisplayCurrency {
  symbol: string;
  code: string;
}

const setDisplayCurrency = (currency: IDisplayCurrency) => {
  return {
    type: 'SET DISPLAY CURRENCY',
    payload: currency,
  };
};

export { setDisplayCurrency };
export type { IDisplayCurrency };
