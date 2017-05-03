const initialState = {
  user: null
};

export const actionTypes = {
  LOGIN: "LOGIN"
};

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
