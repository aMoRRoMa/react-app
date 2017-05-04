import {createSelector} from 'reselect'

const getStepNumber = (state) => state.stepNumber
const getHistory = (state) => state.history

export const squaresSelector = createSelector(
  [getStepNumber, getHistory],
  (stepNumber, history) => history[stepNumber].squares
)