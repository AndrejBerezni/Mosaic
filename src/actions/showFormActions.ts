const showForm = (form: string) => {
  return {
    type: 'SHOW FORM',
    payload: form,
  };
};

const hideForm = (form: string) => {
  return {
    type: 'HIDE FORM',
    payload: form,
  };
};

export { showForm, hideForm };
