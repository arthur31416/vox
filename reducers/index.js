import { combineReducers } from "redux";
import readingReducer from "./readingReducer";
import countReducer from "./countReducer";

export default combineReducers({
  reading: readingReducer,
  count: countReducer
});
