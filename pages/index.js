// flow

import App from "../components/App";
import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import EmptyStateHome from "../components/EmptyStateHome";
import withData from "../lib/withData";
import { bindActionCreators } from "redux";
import { initStore } from "../store";
import { addCount } from "../actions";
import withRedux from "next-redux-wrapper";
import { selectorUserId } from "../selectors";
import { compose, lifecycle } from "recompose";

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
        isLogged={!!selectorUserId(props)}
        addCount={props.addCount}
      />}

    <div>
      You've clicked {props.count} time{props.count > 1 ? "s" : ""}
    </div>
  </App>
);

Index.getInitialProps = ({ store, isServer }) => {
  return { isServer };
};

const mapStateToProps = ({ count }) => ({
  count: count.count
});

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    dispatch
  };
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(
  withData(Index)
);
