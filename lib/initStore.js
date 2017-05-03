import { createStore, applyMiddleware } from "redux";
import getReducer from "../reducers";
import createMiddleware from "./middleware";
import { createLogger } from "redux-logger";

let reduxStore = null;

const logger = createLogger({
  collapsed: (_, { type }) => !type.includes("FAILURE"),
  level: ({ type }) => (type.includes("FAILURE") ? "warn" : "log")
});

export const initStore = (client, initialState) => {
  let store;
  if (!process.browser || !reduxStore) {
    const middleware = createMiddleware(
      client.middleware(),
      applyMiddleware(logger)
    );
    store = createStore(getReducer(client), initialState, middleware);
    if (!process.browser) {
      return store;
    }
    reduxStore = store;
  }
  return reduxStore;
};
