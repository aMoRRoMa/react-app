const defaultHistory = [
  {
    squares: Array(9).fill(null)
  }
]

const history = (state = defaultHistory, action) => {
  console.log('action', action)
  console.log('state', state)

  switch (action.type) {

    case 'STEP_COPMLITE':
      const current = state[action.step]
      const squares = current.squares.slice()
      squares[action.square] = state.xIsNext ? 'X' : 'O'
      return state.concat([{squares: squares}])

    default:
      return state

  }
}

export default history