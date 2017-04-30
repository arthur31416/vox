import App from "../components/App";
import Header from "../components/Header";
import Search from "../components/Search";
import NoSSR from "react-no-ssr";
import withData from "../lib/withData";

const Loading = () => (
  <div>
    Loading...
  </div>
);

export default withData(props => (
  <App>
    <Header pathname={props.url.pathname} />
    <NoSSR onSSR={<Loading />}>
      <Search />
    </NoSSR>
  </App>
));
