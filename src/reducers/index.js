import { combineReducers } from 'redux'

import history from './history.reducer.js'
import stepNumber from './step-number.reducer.js'
import xIsNext from './x-is-next.reducer.js'

const gameApp = combineReducers({
  stepNumber,
  history,
  xIsNext
})

export default gameApp
