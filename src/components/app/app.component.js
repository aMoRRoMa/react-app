import {connect} from 'react-redux'

import {
  stepComplite,
  jumpTo
} from '../../actions'

import {calculateWinner} from '../../helpers'

import Game from '../game/game.component.js'

const mapStateToProps = (state) => {
  return {
    history: state.history,
    squares: state.history[state.stepNumber].squares,
    status: calculateWinner(state.history[state.stepNumber].squares) ? 'Winner: ' + calculateWinner(state.history[state.stepNumber].squares) : 'Next player: ' + (state.xIsNext ? 'X' : 'O'),
    step: state.stepNumber,
    player: state.xIsNext ? 'X' : 'O'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (step, i, player) => {
      dispatch(stepComplite(step, i, player))
    },
    onJumpToClick: (step) => {
      dispatch(jumpTo(step))
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default App