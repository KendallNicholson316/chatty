import React from 'react'

import UserInfo from './UserInfo'
import RoomList from './RoomList'

const Sidebar = ({user, logOut}) => {
  return (
    <aside
      className="Sidebar"
      style={styles.sidebar}
    >
      <UserInfo 
		user={user} 
		logOut={logOut}
	  />
      <h1 style={styles.h1}>XTBC 18</h1>
      <RoomList />
    </aside>
  )
}

const styles = {
  sidebar: {
    backgroundColor: 'rgb(160, 193, 247)',
    color: '#333344',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  h1: {
    color: '#333344',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  },
}

export default Sidebar
