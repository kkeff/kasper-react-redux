const test = (state = 'LOGIN', action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return action.page
    default:
      return state
  }
}

export default test
