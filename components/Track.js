import React from 'react';

const SingleTrack = hit => (
  <div>
    {hit.author} - {hit.title} - {hit.language}
  </div>
)

const Tracks = ({ hits }) => (
  <div>
    {
      hits.map(hit => (
        <SingleTrack
          key={hit.id} 
          hit={hit}
        />
      ))
    }
  </div>
)

export default Tracks;
