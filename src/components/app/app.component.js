import {connect} from 'react-redux'

import {
  stepComplite,
  jumpTo
} from '../../actions'

import {calculateWinner} from '../../helpers'

import Game from '../game/game.component.js'

const mapStateToProps = (state) => {
  return {
    squares: state.history[state.stepNumber],
    status: calculateWinner(state.history[state.stepNumber]) ? 'Winner: ' + calculateWinner(state.history[state.stepNumber]) : 'Next player: ' + (state.xIsNext ? 'X' : 'O'),
    step: state.stepNumber,
    player: state.xIsNext ? 'X' : 'O'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (step, i, player) => {
      dispatch(stepComplite(step, i, player))
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default App