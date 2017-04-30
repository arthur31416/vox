// flow

import React from "react";
import type { TrackProps } from "../Types";

type TracksProps = {
  hits: Array<TrackProps>
};

const SingleTrack = ({ hit }) => (
  <div>
    {hit.author} - {hit.title} - {hit.language}
  </div>
);

const Tracks = ({ hits }: TracksProps) => (
  <div>
    {hits.map(hit => <SingleTrack key={hit.id} hit={hit} />)}
  </div>
);

export default Tracks;
