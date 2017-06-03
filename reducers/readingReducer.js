// @flow

import type { ReadingType, ActionType } from "../types";
import { uniq, uniqBy, compose, append, prop } from "ramda";

type StateType = {
  readings: Array<ReadingType>,
  current: ?string,
  bookIds: Array<string>
};

const initialState = {
  readings: [],
  current: null,
  bookIds: []
};

export const readingTypes = {
  PLAY_BOOK: "PLAY_BOOK"
};

// REDUCERS
const reducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
    case readingTypes.PLAY_BOOK:
      const { bookId, section, time } = action;
      const reading = {
        bookId,
        section,
        time,
        stoppedAt: 888
      };

      return {
        ...state,
        current: bookId,
        bookIds: compose(uniq, append(bookId))(state.bookIds),
        readings: compose(uniqBy(prop("bookId")), append(reading))(
          state.readings
        )
      };
    default:
      return state;
  }
};

export default reducer;
