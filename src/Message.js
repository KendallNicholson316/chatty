import React from 'react'

const Message = (props) =>{
	return(
		<div className = "Message" style={styles.Message}>
			{props.message.user.displayName}: {props.message.body}
		</div>
	)
}

const styles = {
	Message: {
		display: 'flex',
  		marginTop: '1rem',
  		padding: '0 1rem',
	},

}

export default Message
