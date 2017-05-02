const xIsNext = (state = true, action) => {
  switch (action.type) {

    case 'STEP_COPMLITE':
      return !state

    case 'JUMP_TO':
      return (action.step % 2) ? false : true

    default:
      return state

  }
}

export default xIsNext