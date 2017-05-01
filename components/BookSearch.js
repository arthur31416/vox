// flow

import { InstantSearch } from "react-instantsearch/dom";
import {
  connectSearchBox,
  connectInfiniteHits
} from "react-instantsearch/connectors";
import NoSSR from "react-no-ssr";
import SearchBox from "./SearchBox";
import Container from "./Container";
import Tracks from "./Tracks";
import { Metrics } from "../themes";

const Loading = () => (
  <div>
    Loading...
  </div>
);

const ConnectedSearchBox = connectSearchBox(SearchBox);
const ConnectedTracks = connectInfiniteHits(Tracks);

const BookSearch = () => (
  <Container>
    <NoSSR onSSR={<Loading />}>
      <InstantSearch
        appId="IB3O05S7C2"
        apiKey="862f872851208b8543e2627e96dc6585"
        indexName="book"
      >
        <ConnectedSearchBox />
        <ConnectedTracks />
      </InstantSearch>
    </NoSSR>
  </Container>
);

export default BookSearch;
