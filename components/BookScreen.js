// flow

import React from "react";
import { gql, graphql } from "react-apollo";
import ProgressiveBackground from "./ProgressiveBackground";
import { getThumbnail, secondsToHms } from "../helpers";
import { Colors, Metrics } from "../themes";
import R from "ramda";

type Props = {
  coverArt: string,
  coverArtLarge: string,
  title: string
};

type TrackProps = {
  chapter: string,
  reader: { id: number, name: string } | string,
  section: number,
  time: number,
  url_mp3_ld: string,
  url_mp3_hd: string
};

const renderTrack = (track: TrackProps) => (
  <div key={track.section} className="container">
    <div>
      <span>{track.chapter} </span>
      <a href={track["url_mp3_ld"]}>Link</a>
    </div>

    <div>
      {secondsToHms(track.time)}
    </div>

    <style jsx>{`
      .container {
        background-color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: ${Metrics.doublePadding}px;
        border-bottom: 1px solid ${Colors.border};
      }
    `}</style>
  </div>
);

const sortBySection = R.sortBy(R.prop("section"));
const classNameCover = "cover";

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
        className={classNameCover}
      />
      {!loading && R.map(renderTrack, sortBySection(tracks))}
      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
        }

         .container > :global(.${classNameCover}):first-child {
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
