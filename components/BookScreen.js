// flow

import React from "react";
import { gql, graphql } from "react-apollo";
import ProgressiveBackground from "./ProgressiveBackground";
import ListSounds from "./ListSounds";
import { getThumbnail, secondsToHms } from "../helpers";
import { Colors, Metrics } from "../themes";
import R from "ramda";
import { compose, pure, withState } from "recompose";

type Props = {
  coverArt: string,
  coverArtLarge: string,
  title: string,
  isPlaying: boolean,
  togglePlaying: () => void,
  sectionPlaying: ?number,
  updateSectionPlaying: (sectionPlaying: ?number) => void
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

const BookScreen = ({
  params,
  data,
  isPlaying,
  togglePlaying,
  sectionPlaying,
  updateSectionPlaying
}) => {
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
        onClick={() => togglePlaying(!isPlaying)}
      />
      {/* TODO: add click listener to track sections using updateSectionPlaying */}
      {!loading && R.map(renderTrack, sortBySection(tracks))}

      <ListSounds
        tracks={tracks}
        isPlaying={isPlaying}
        sectionPlaying={sectionPlaying}
      />

      {isPlaying && <div className="devIndicator" />}

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

        .devIndicator {
          width: 30px;
          height: 30px;
          position: absolute;
          bottom: 10px;
          right: 10px;
          background-color: pink;
          border-radius: 50%;
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

const enhance = compose(
  withState("isPlaying", "togglePlaying", false),
  withState("sectionPlaying", "updateSectionPlaying", 1),
  graphql(BookScreenQuery, {
    options: route => ({
      variables: { id: route.params.id }
    })
  }),
  pure
);

export default enhance(BookScreen);
