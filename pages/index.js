// flow

import App from "../components/App";
import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import EmptyStateHome from "../components/EmptyStateHome";
import withData from "../lib/withData";
import { bindActionCreators } from "redux";
import { initStore, startClock, addCount, serverRenderClock } from "../store";
import withRedux from "next-redux-wrapper";
import { getUserId } from "../selectors";

const NB_BOOKS = 0;

// const login = dispatch => dispatch("LOGIN", { id: 666, name: "Anton" });
const login = dispatch => () =>
  dispatch({ type: "LOGIN", payload: { id: 666, name: "Arthur" } });

const Index = props => (
  <App>
    <Tabbar pathname={props.url.pathname} />
    <Navbar title={`Current books (${NB_BOOKS})`} />

    {NB_BOOKS === 0 &&
      <EmptyStateHome
        login={login(props.dispatch)}
        isLogged={!!getUserId(props)}
      />}

    <div>
      You've come here {props.count} time{props.count > 1 ? "s" : ""}
    </div>
  </App>
);

Index.getInitialProps = ({ store, isServer }) => {
  store.dispatch(serverRenderClock(isServer));
  store.dispatch(addCount());

  return { isServer };
};

const mapStateToProps = ({ count }) => ({
  count
});

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  };
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(
  withData(Index)
);
