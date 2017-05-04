// flow

import App from "../components/App";
import withData from "../lib/withData";
import Navbar from "../components/Navbar";
import { path } from "ramda";
import BookScreen from "../components/BookScreen";

const getQueryParams = path(["url", "query"]);
const getTitle = path(["url", "query", "title"]);

type Props = {
  url: {
    pathname: string,
    query: {
      id: string,
      title: string,
      coverArt: string,
      coverArtLarge: string
    }
  }
};

export default withData(props => (
  <App hasTabbar={false}>
    <Navbar title={getTitle(props)} />
    <BookScreen params={getQueryParams(props)} />
  </App>
));
