import React from 'react'

import Avatar from './Avatar'
import LogOutButton from './LogOutButton'

const UserInfo = ({user, logOut}) => {
  return (
    <div
      className="UserInfo"
      style={styles.userInfo}
    >
	  <Avatar user = {user} />
      <div style={styles.user}>
        {user.username}
      </div>
      <LogOutButton logOut={logOut}/>
    </div>
  )
}

const styles = {
  userInfo: {
    padding: '0 1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  user: {
    flex: 1,
  }
}

export default UserInfo
