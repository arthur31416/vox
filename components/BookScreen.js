// flow

import React from "react";
import { gql, graphql } from "react-apollo";

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
      <div>{params.title}</div>
      <img src={params.coverArtLarge} width={250} height={250} />
      {!loading &&
        tracks.map((track, index) => (
          <div key={index}>
            <a href={track["url_mp3_ld"]}>Track {index + 1}</a>
          </div>
        ))}
      <style jsx>{`
        .container {
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
