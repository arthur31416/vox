// flow

import App from "../components/App";
import withData from "../lib/withData";
import Navbar from "../components/Navbar";
import { path } from "ramda";
import BookScreen from "../components/BookScreen";
import { selectorBack, selectorQueryParams } from "../selectors";
import IconStarOutline from "react-icons/lib/md/star-outline";
import IconStar from "react-icons/lib/md/star";
import { Metrics } from "../themes";

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
    <Navbar
      back={selectorBack(props)}
      title={getTitle(props)}
      titleRight={<IconStarOutline size={Metrics.navbarIconSize} />}
    />
    <BookScreen params={selectorQueryParams(props)} />
  </App>
));
