// @flow

import { readingTypes } from "../reducers/readingReducer";
import { countTypes } from "../reducers/countReducer";

export const actionTypes = {
  ...readingTypes,
  ...countTypes
};

type DispatchType = () => void;

export const addCount = () => (dispatch: DispatchType) =>
  dispatch({ type: actionTypes.ADD });

export const playBook = (bookId: string, section: number, time: number = 0) => (
  dispatch: DispatchType
) => dispatch({ type: actionTypes.PLAY_BOOK, bookId, section, time });
