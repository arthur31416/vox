import { path } from "ramda";

const getUserId = path(["initialState", "login", "user", "id"]);

export { getUserId };
