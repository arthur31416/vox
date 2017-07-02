// @flow

import type { ActionType } from "../types";

const initialState = {
  count: 0
};

export const countTypes = {
  ADD: "ADD",
  PONG: "PONG"
};

const counterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case countTypes.ADD:
      return {
        ...state,
        count: state.count + 1
      };
    case countTypes.PONG:
      return state;
    default:
      return state;
  }
};

export default counterReducer;
