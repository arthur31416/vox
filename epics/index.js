// @flow
import { combineEpics } from "redux-observable";
import epicCount from "./epicCount";

export default combineEpics(epicCount);
