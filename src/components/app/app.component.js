import {connect} from 'react-redux'

import {
  stepComplite,
  jumpTo
} from '../../actions'

import {
  movesSelector,
  squaresSelector,
  statusSelector,
  playerSelector
} from '../../selectors'

import {calculateWinner} from '../../helpers'

import Game from '../game/game.component.js'

const mapStateToProps = (state) => {
  return {
    moves: movesSelector(state),
    squares: squaresSelector(state),
    status: statusSelector(state),
    step: state.stepNumber,
    player: playerSelector(state)
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