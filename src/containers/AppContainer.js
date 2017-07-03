import React from 'react'

const AppContainer = () => {
  return (
    <div>
    <h1>The Grape ACS</h1>
      <p>
        <button onClick="start()">Connect to Grape ACS</button>
        <button onClick="closeCall()">Disconnect from ACS</button>  <br/>
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

export default AppContainer
