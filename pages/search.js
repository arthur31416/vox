// flow

import App from "../components/App";
import Tabbar from "../components/Tabbar";
import BookSearch from "../components/BookSearch";
import withData from "../lib/withData";

export default withData(props => (
  <App>
    <Tabbar pathname={props.url.pathname} />
    <BookSearch />
  </App>
));
