import { InstantSearch } from "react-instantsearch/dom";
import {
  connectSearchBox,
  connectInfiniteHits
} from "react-instantsearch/connectors";
import SearchBox from "./SearchBox";
import Tracks from "./Tracks";

const width = 768;

const ConnectedSearchBox = connectSearchBox(SearchBox);

const ConnectedTracks = connectInfiniteHits(Tracks);

const Search = () => (
  <div className="container">
    <InstantSearch
      appId="IB3O05S7C2"
      apiKey="862f872851208b8543e2627e96dc6585"
      indexName="book"
    >
      <ConnectedSearchBox />
      <ConnectedTracks />
    </InstantSearch>

    <style jsx>{`
    .container {
      display: flex;
      flex: 1;
      max-width: ${width}px;
      margin: auto;
    }
  `}</style>
  </div>
);

export default Search;
