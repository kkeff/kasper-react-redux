const defaultState = {
  appName: 'Care'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return action.page
    default:
      return state
  }
}
