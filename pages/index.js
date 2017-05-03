// flow

import App from "../components/App";
import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import EmptyStateHome from "../components/EmptyStateHome";
import withData from "../lib/withData";
import { getUserId } from "../selectors";

const NB_BOOKS = 0;

// const login = dispatch => dispatch("LOGIN", { id: 666, name: "Anton" });
const login = dispatch => () =>
  dispatch({ type: "LOGIN", payload: { id: 666, name: "Arthur" } });

export default withData(props => (
  <App>
    <Tabbar pathname={props.url.pathname} />
    <Navbar title={`Current books (${NB_BOOKS})`} />

    {NB_BOOKS === 0 &&
      <EmptyStateHome
        login={login(props.dispatch)}
        isLogged={!!getUserId(props)}
      />}
  </App>
));
