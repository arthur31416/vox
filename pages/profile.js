import App from "../components/App";
import Tabbar from "../components/Tabbar";
import Navbar from "../components/Navbar";

export default props => (
  <App>
    <Tabbar pathname={props.url.pathname} />
    <Navbar title="Profile" />
    <div>
      Profile
    </div>
  </App>
);
