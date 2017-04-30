// flow

import React from "react";
import { Metrics } from "../themes";

type Props = {
  currentRefinement: string,
  refine: (value: string) => void
};

const SearchBox = ({ currentRefinement, refine }: Props) => (
  <div className="container-input">
    <input
      type="text"
      placeholder="Search a book"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
    />

    <style jsx>{`
      .container-input {
        display: flex;
        flex: 1;
        width: ${Metrics.mobileWidth}px;
        max-width: 100%;
        min-height: 42px;
        background-color: red;
        margin: 45px 0px;
      }

      input {
        display: flex;
        flex: 1;
        font-size: 18px;
        padding: 15px 30px;
        border: none;
        border-bottom: 1px solid #ccc;
      }
    `}</style>
  </div>
);

export default SearchBox;
