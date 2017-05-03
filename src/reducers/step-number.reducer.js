const stepNumber = (state = 0, action) => {
  switch (action.type) {

    case 'STEP_COPMLITE':
      return state + 1

    case 'JUMP_TO':
      return action.step

    default:
      return state

  }
}

export default stepNumber