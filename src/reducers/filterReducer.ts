interface filterAction {
  type: string;
  payload: string;
}

const initialState = 'All';

const filterReducer = (state: string = initialState, action: filterAction) => {
  switch (action.type) {
    case 'SET FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
