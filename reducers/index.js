import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

export default function getReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    login: loginReducer
  });
}
