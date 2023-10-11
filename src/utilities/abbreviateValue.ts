const abbreviateValue = (value: number) => {
  if (value < 100000) {
    return value.toString();
  } else if (value >= 100000 && value < 1000000) {
    const thousands = (value / 1000).toFixed(1);
    return thousands + "K";
  } else if (value >= 1000000 && value < 1000000000) {
    const millions = (value / 1000000).toFixed(2);
    return millions + "M";
  } else {
    const billions = (value / 1000000000).toFixed(2);
    return billions + "B";
  }
};

export default abbreviateValue;
