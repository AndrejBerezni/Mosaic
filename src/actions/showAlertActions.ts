const showAlert = (alert: string) => {
  return {
    type: "SHOW ALERT",
    payload: alert,
  };
};

const hideAlert = () => {
  return {
    type: "HIDE ALERT",
  };
};

export { showAlert, hideAlert };
