interface Alert {
  message: string;
  type: string;
}

const showAlert = (alert: Alert) => {
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
export type { Alert };
