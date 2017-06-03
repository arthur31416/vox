// flow

import React from "react";
import { gql, graphql } from "react-apollo";
import ProgressiveBackground from "../components/ProgressiveBackground";
import ListSounds from "../components/ListSounds";
import { getThumbnail, secondsToHms } from "../helpers";
import { Colors, Metrics } from "../themes";
import R from "ramda";
import { compose, pure, withState, withHandlers, branch } from "recompose";

type Props = {
  coverArt: string,
  coverArtLarge: string,
  title: string,
  isPlaying: boolean,
  togglePlaying: () => void,
  sectionPlaying: ?number,
  updateSectionPlaying: (sectionPlaying: ?number) => void,
  onClickTrack: (section: number) => void,
  playBook: (bookId: string, section: number, time?: number) => void
};

type TrackProps = {
  chapter: string,
  reader: { id: number, name: string } | string,
  section: number,
  time: number,
  url_mp3_ld: string,
  url_mp3_hd: string
};

type SingleTrackProps = {
  track: TrackProps,
  onClickTrack: (section: number) => void
};
const SingleTrack = pure(({ track, onClickTrack }: SingleTrackProps) => (
  <div className="container" onClick={() => onClickTrack(track.section)}>
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
        cursor: pointer;
        transition: background-color ease-in-out 200ms;
      }

      .container:hover {
        background-color: #f3f3f3;
      }
    `}</style>
  </div>
));

const sortBySection = R.sortBy(R.prop("section"));
const classNameCover = "cover";

const BookScreen = ({
  params,
  data,
  isPlaying,
  togglePlaying,
  sectionPlaying,
  updateSectionPlaying,
  onClickTrack
}) => {
  const { Book, loading } = data;

  // TODO: have a better loading state
  const { reader, time, size, tracks } = Book || {};
  const sortedTracks = loading ? [] : sortBySection(tracks);

  return (
    <div className="container">
      <ProgressiveBackground
        src={params.coverArtLarge}
        placeholder={getThumbnail()(params.coverArtLarge)}
        className={classNameCover}
        onClick={() => togglePlaying(!isPlaying)}
      />
      {/* TODO: add click listener to track sections using updateSectionPlaying */}
      {sortedTracks.map(track => (
        <SingleTrack
          key={track.section}
          track={track}
          onClickTrack={onClickTrack}
        />
      ))}

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
          cursor: pointer;
          transition: width ease-in-out 200ms;
        }

         .container > :global(.${classNameCover}):first-child:hover {
           width: 100.5%;
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

const onClickTrack = ({
  togglePlaying,
  updateSectionPlaying,
  sectionPlaying,
  isPlaying,
  playBook
}) => (section: number) => {
  if (sectionPlaying === section) {
    togglePlaying(!isPlaying);
  } else {
    updateSectionPlaying(section);
    togglePlaying(true);
    playBook("book_id", 3, 666);
  }
};

const errorHoc = () => () => <div>There is an error. Please retry.</div>;
const hasError = ({ loading, error }) => !loading && error;

const enhance = compose(
  withState("isPlaying", "togglePlaying", false),
  withState("sectionPlaying", "updateSectionPlaying", 1),
  graphql(BookScreenQuery, {
    options: route => ({
      variables: { id: route.params.id }
    })
  }),
  branch(hasError, errorHoc),
  withHandlers({ onClickTrack }),
  pure
);

export default enhance(BookScreen);
