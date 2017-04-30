// flow

import React from "react";
import { Metrics, Colors } from "../themes";

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
        margin-top: ${Metrics.doublePadding * 2}px;
        margin-bottom: ${Metrics.basePadding}px;
      }

      input {
        display: flex;
        flex: 1;
        font-size: 18px;
        padding: ${Metrics.basePadding}px ${Metrics.doublePadding};
        border: none;
        border-bottom: 1px solid ${Colors.border};
      }
    `}</style>
  </div>
);

export default SearchBox;
