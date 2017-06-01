// @flow

import { pure } from "recompose";
import Sound from "react-sound";
import R from "ramda";

type Props = {
  tracks: Array<{
    chapter: string,
    reader: { id: number, name: string } | string,
    section: number,
    time: number,
    url_mp3_ld: string,
    url_mp3_hd: string
  }>,
  isPlaying: number,
  sectionPlaying: ?number
};

const ListSounds = ({ tracks, isPlaying, sectionPlaying }: Props) => (
  <div style={{ height: 0, visible: "none" }}>
    {!!tracks &&
      tracks.map((track, index) => (
        <Sound
          key={index}
          url={R.path(["url_mp3_ld"], track)}
          playStatus={
            isPlaying && track.section === sectionPlaying ? "PLAYING" : "PAUSED"
          }
          onFinishedPlaying={() => {
            console.log("TODO: play next track");
          }}
        />
      ))}
  </div>
);

export default pure(ListSounds);
