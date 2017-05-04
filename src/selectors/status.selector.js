import {createSelector} from 'reselect'

import {winnerSelector} from './winner.selector.js'

const getXIsNext = (state) => state.xIsNext

export const statusSelector = createSelector(
  [winnerSelector, getXIsNext],
  (winner, xIsNext) => winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')
)