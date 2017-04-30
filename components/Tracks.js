// flow

import React from "react";
import type { TrackProps } from "../types";
import Avatar from "./Avatar";
import { Metrics } from "../themes";

type TracksProps = {
  hits: Array<TrackProps>
};

const SingleTrack = ({ hit }) => (
  <div className="container">
    <div>
      <Avatar url={hit.coverArt} />
    </div>

    <div className="container-infos">
      <div>{hit.author}</div>
      <div>{hit.title}</div>
      <div>{hit.language}</div>
    </div>
    <style jsx>{`
      .container {
        padding: ${Metrics.doublePadding}px 0px; 
        display: flex;
        flex-direction: row;
      }
      .container-infos {
        display: flex;
        flex-direction: column;
        margin-left: ${Metrics.doublePadding}px;
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
