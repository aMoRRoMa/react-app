const defaultHistory = [
  {
    squares: Array(9).fill(null)
  }
]

const history = (state = defaultHistory, action) => {
  switch (action.type) {

    case 'STEP_COPMLITE':
      const current = state[action.step]
      const squares = current.squares.slice()
      squares[action.square] = action.player

      return state.concat([{squares: squares}])

    case 'JUMP_TO':
      const step = action.step
      if(step > 0) {
        return state.slice(0, step+1)
      }
      else {
        return state
      }

    default:
      return state

  }
}

export default history