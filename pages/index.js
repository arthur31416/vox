// flow

import App from "../components/App";
import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import EmptyStateHome from "../components/EmptyStateHome";

const NB_BOOKS = 0;

export default props => (
  <App>
    <Tabbar pathname={props.url.pathname} />
    <Navbar title={`Current books (${NB_BOOKS})`} />

    {NB_BOOKS === 0 &&
      <EmptyStateHome
        onSearch={() => {
          console.log("Go to search!");
        }}
        onLogin={() => {
          console.log("Go login");
        }}
        isLogged={false}
      />}
  </App>
);
