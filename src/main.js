import React           from 'react'
import { render }      from 'react-dom'
import { createStore } from 'redux'
import { Provider }    from 'react-redux';

import AppContainer    from './containers/AppContainer'
import reducer         from './reducer'
import potClientMaker  from './pot-client/potClient'
import { uri, serverPub, myPublic, mySecret, delegChain } from './utils/hardCodedValues'

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

console.log('Hej: ' + localStorage.getItem('myCat'))
localStorage.myCat = 'Tom';

const potClient = potClientMaker();

const client = potClient.start(uri, serverPub, myPublic, mySecret, delegChain);
const store = createStore(reducer)

render(
  <Provider store={store}>
    <AppContainer client={client} />
  </Provider>,
  MOUNT_NODE
)

/*
// Development Tools
// ------------------------------------
if (__DEV__) {
if (module.hot) {
const renderApp = render
const renderError = (error) => {
const RedBox = require('redbox-react').default

ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
}

render = () => {
try {
renderApp()
} catch (e) {
console.error(e)
renderError(e)
}
}

// Setup hot module replacement
module.hot.accept([
'./components/App',
'./routes/index',
], () =>
setImmediate(() => {
ReactDOM.unmountComponentAtNode(MOUNT_NODE)
render()
})
)
}
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
*/
