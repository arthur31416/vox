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
        min-height: 42px;
        margin-bottom: ${Metrics.basePadding}px;
      }

      input {
        display: flex;
        flex: 1;
        font-size: 18px;
        padding: ${Metrics.basePadding}px ${Metrics.doublePadding}px;
        border: none;
        border-bottom: 2px solid ${Colors.border};
        color: #777;
      }

      input:focus, input:active {
        border-bottom: 2px solid ${Colors.borderActive};
        color: #111;
      }
    `}</style>
  </div>
);

export default SearchBox;
