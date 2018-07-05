import React from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

const Message = ({message}) =>{
	return(
		<div 
			className = "Message" 
			style={styles.Message}
		>
			<Avatar user={message.user}/>
			<div style={styles.Details}>
				<Metadata message={message} />
				<div className = "body">
					{message.body}
				</div>
			</div>
		</div>
	)
}


const styles = {
	Message: {
		display: 'flex',
  		marginTop: '1rem',
  		padding: '0 1rem',
	},
	
	Details:{
		flex: 1,
		paddingLeft: '0.5rem',
	},

}

export default Message
