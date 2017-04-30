// flow

import { InstantSearch } from "react-instantsearch/dom";
import {
  connectSearchBox,
  connectInfiniteHits
} from "react-instantsearch/connectors";
import SearchBox from "./SearchBox";
import Container from "./Container";
import Tracks from "./Tracks";
import { Metrics } from "../themes";

const ConnectedSearchBox = connectSearchBox(SearchBox);
const ConnectedTracks = connectInfiniteHits(Tracks);

const Search = () => (
  <Container>
    <InstantSearch
      appId="IB3O05S7C2"
      apiKey="862f872851208b8543e2627e96dc6585"
      indexName="book"
    >
      <ConnectedSearchBox />
      <ConnectedTracks />
    </InstantSearch>
  </Container>
);

export default Search;
