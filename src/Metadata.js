import React from 'react'
import moment from 'moment'

const Metadata = ({ message }) => {
  return (
    <div
      className="Metadata"
      style={styles.metadata}
    >
      <div style={styles.user}>
        {message.user.username}
      </div>
      <div style={styles.time}>
      	{moment(message.createdAt).fromNow()} 
      </div>
    </div>
  )
}

const styles = {
  metadata: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  },
}

export default Metadata
