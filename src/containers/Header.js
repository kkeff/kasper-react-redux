import React from 'react'


const Header = ({ appName, client }) => {
  return (
    <div className="header-temp">
      HEADER:::
      {appName}
      <button onClick={() => client.getClients()}>
        Get clients
      </button>
    </div>
  )
}
export default Header
