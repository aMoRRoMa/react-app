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
      return [
        state.concat([{
          squares: squares
        }])
      ]

    default:
      return state

  }
}

export default history