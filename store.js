import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";
import epic from "./epics";
import { createLogger } from "redux-logger";
import reducer from "./reducers";

const logger = createLogger({
  predicate: (getState, { type }) => !!type
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epiceMiddleware = createEpicMiddleware(epic);

export const initStore = (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(epiceMiddleware, logger, thunkMiddleware))
  );
};
