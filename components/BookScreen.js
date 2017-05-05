// flow

import React from "react";
import { gql, graphql } from "react-apollo";
import ProgressiveBackground from "./ProgressiveBackground";
import { getThumbnail } from "../helpers";
import { Colors, Metrics } from "../themes";

type Props = {
  coverArt: string,
  coverArtLarge: string,
  title: string
};

const BookScreen = ({ params, data }) => {
  const { Book, loading, error } = data;

  if (!loading && error) {
    return <div>There is an error. Please retry.</div>;
  }

  // TODO: have a better loading state
  const { reader, time, size, tracks } = Book || {};

  return (
    <div className="container">
      <ProgressiveBackground
        src={params.coverArtLarge}
        placeholder={getThumbnail()(params.coverArtLarge)}
        className="cover"
      />

      {!loading &&
        tracks.map((track, index) => (
          <div key={index}>
            <a href={track["url_mp3_ld"]}>Track {index + 1}</a>
          </div>
        ))}
      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
        }

         .container > :global(.cover):first-child {
          width: 100vw;
          height: ${Metrics.coverHeight}px;
          display: flex;
          flex: 1;
          background-color: ${Colors.charcoal};
        }
      `}</style>
    </div>
  );
};

const BookScreenQuery = gql`
  query BookQuery($id: ID!) {
    Book(id: $id) {
      id
      reader
      time
      size
      tracks
    }
  }
`;

const BookScreenWithData = graphql(BookScreenQuery, {
  options: ({ route }) => ({
    variables: { id: "cj1cn698dyahm0109styakdr3" }
  })
})(BookScreen);

export default BookScreenWithData;
