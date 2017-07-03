import React from 'react'
import { connect } from 'react-redux'

import { uri, serverPub, myPublic, mySecret, delegChain } from '../utils/hardCodedValues'
import Header from './Header'

const mapStateToProps = state => ({
  appName: state.common.appName
});

class AppContainer extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      tbc: 'tjena'
    }
  }

  render(){
    const that = this;
    return (
      <div>
        <Header appName={that.props.appName}
                client={that.props.client}/>
      <h1>Hämta klienter</h1>
        <p>
          <button onClick={() => that.props.client.init()}>
            Connect to Grape ACS
          </button>
          <button onClick={() => that.props.client.close()}>
            Disconnect from ACS
          </button>  <br/>
        </p>
        <p>
          <button onClick="changeDiv('newUserDiv')">Add New User</button>
          <button onClick="changeDiv('updateUserDiv')">Update User</button>
          <button onClick="changeDiv('newRoleDiv')">Add New Role</button>
          <button onClick="changeDiv('manageRoleDiv')">Manage Roles</button>
          <button onClick="changeDiv('assignRolesDiv')">Assign Roles</button>
          <button onClick="changeDiv('sendPubkeyDiv')">Send ACS public key</button>
        </p>
    </div>
    )
  }
}

export default connect(
    mapStateToProps,
    null
)(AppContainer)
