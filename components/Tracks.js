// flow

import React from "react";
import type { TrackProps } from "../types";
import { Metrics } from "../themes";

type TracksProps = {
  hits: Array<TrackProps>
};

const SingleTrack = ({ hit }) => (
  <div className="container">
    {hit.author} - {hit.title} - {hit.language}
    <style jsx>{`
      .container {
        padding: ${Metrics.doublePadding}px 0px; 
      }
    `}</style>
  </div>
);

const Tracks = ({ hits }: TracksProps) => (
  <div>
    {hits.map(hit => <SingleTrack key={hit.id} hit={hit} />)}
  </div>
);

export default Tracks;
