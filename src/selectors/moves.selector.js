import {createSelector} from 'reselect'

const getHistory = (state) => state.history

export const movesSelector = createSelector(
  getHistory,
  moves => moves.map((step, move) => {
    const desc = move ? 'Move #' + move : 'Game start'
    return {
      move: move,
      desc: desc
    }
  })
)

