import {createSelector} from 'reselect'

const getXIsNext = (state) => state.xIsNext

export const playerSelector = createSelector(
  getXIsNext,
  xIsNext => xIsNext ? 'X' : 'O'
)