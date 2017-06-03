type TrackProps = {
  id: string,
  author: string,
  language: string,
  title: string,
  coverArt: string,
  coverArtLarge: string,
  size: number,
  time: number,
  yearBirth: Date,
  yearDeath: Date
};

type ReadingType = {
  bookId: string,
  section: ?number,
  stoppedAt: ?number
};

type ActionType = {
  type: string,
  payload: Object
};

export type { TrackProps, ReadingType, ActionType };
