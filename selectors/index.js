import { path } from "ramda";

const selectorUserId = path(["initialState", "login", "user", "id"]);
const selectorBack = path(["url", "back"]);
const selectorQueryParams = path(["url", "query"]);

export { selectorUserId, selectorBack, selectorQueryParams };
