const darkModeOn = () => {
  return {
    type: 'DARK MODE ON',
  };
};

const darkModeOff = () => {
  return {
    type: 'DARK MODE OFF',
  };
};

export { darkModeOn, darkModeOff };
