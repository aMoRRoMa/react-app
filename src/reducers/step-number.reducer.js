const stepNumber = (state = 1, action) => {
  switch (action.type) {

    case 'STEP_COPMLITE':
      return state++

    case 'JUMP_TO':
      return action.step

    default:
      return state

  }
}

export default stepNumber