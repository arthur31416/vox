import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";
import epic from "./epics";
import { createLogger } from "redux-logger";

const logger = createLogger({
  predicate: (getState, { type }) => !!type
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epiceMiddleware = createEpicMiddleware(epic);

const exampleInitialState = {
  count: 0
};

export const actionTypes = {
  ADD: "ADD",
  PONG: "PONG"
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.PONG:
      return state;
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
};

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD });
};

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(epiceMiddleware, logger, thunkMiddleware))
  );
};
