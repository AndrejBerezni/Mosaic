const showAlert = (alert: string) => {
  return {
    type: "SHOW ALERT",
    payload: alert,
  };
};

const hideAlert = (alert: string) => {
  return {
    type: "HIDE ALERT",
    payload: alert,
  };
};

export { showAlert, hideAlert };
