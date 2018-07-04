import React from 'react'

import Message from './Message.js'

const MessageList = (props) => {
	return(
		<div className = "MessageList" style={styles.MessageList}>
			{
				props.messages.map(msg => (
          			<Message message={msg} key={msg.id} />
        		))
			}
		</div>
	)
}

const styles = {
	MessageList: {
  		backgroundColor: 'rgb(219, 220, 221)',
  		flex: '1',
  		paddingBottom: '1rem',
  		overflowY: 'scroll',
	}

}

export default MessageList
