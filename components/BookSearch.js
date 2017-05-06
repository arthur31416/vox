// flow

import { InstantSearch } from "react-instantsearch/dom";
import {
  connectSearchBox,
  connectInfiniteHits
} from "react-instantsearch/connectors";
import NoSSR from "react-no-ssr";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import { Metrics } from "../themes";

const Loading = () => (
  <div>
    Loading...
  </div>
);

const ConnectedSearchBox = connectSearchBox(SearchBox);
const ConnectedSearchResult = connectInfiniteHits(SearchResult);

const BookSearch = () => (
  <div className="container">
    <NoSSR onSSR={<Loading />}>
      <InstantSearch
        appId="IB3O05S7C2"
        apiKey="862f872851208b8543e2627e96dc6585"
        indexName="book"
      >
        <ConnectedSearchBox />
        <ConnectedSearchResult />
      </InstantSearch>
    </NoSSR>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    `}</style>
  </div>
);

export default BookSearch;
