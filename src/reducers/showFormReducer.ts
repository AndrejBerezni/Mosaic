interface showFormState {
  showForm: boolean;
}

interface showFormAction {
  type: string;
}

const initialState: showFormState = {
  showForm: false,
};

const showFormReducer = (
  state: showFormState = initialState,
  action: showFormAction
) => {
  switch (action.type) {
    case "SHOW FORM":
      return {
        showForm: true,
      };
    case "HIDE FORM":
      return {
        showForm: false,
      };
    default:
      return state;
  }
};

export default showFormReducer;
