interface sortAction {
  type: string;
  payload: string;
}

const initialState = "A-Z";

const sortReducer = (state: string = initialState, action: sortAction) => {
  switch (action.type) {
    case "SET SORT":
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
