import React from 'react'

const ChatHeader = ({room, removeRoom}) => {
    return (	
		<header 
			className="ChatHeader" 
			style={styles.ChatHeader} 
		>
			<div className="roomInfo">
        	<h2 style={styles.h2}>
				debugger
				#{room.name}
			</h2>
        	<p style={styles.p}>
				{room.description}
			</p>
        	</div>

			<button
				style={styles.button}
				onClick={() => removeRoom(room.name)}
			>
				<i className="far fa-trash-alt" title="delete room"></i>
			</button>
    	</header>
    )
}

const styles={
	ChatHeader: {
  		backgroundColor: '#f3f3f3',
  		borderBottom: '1px solid #ccc',
  		height: '3rem',
  		padding: '0 1rem',
  		display: 'flex',
  		alignItems: 'center',
		justifyContent: 'space-between',
	},

	h2: {
  		fontSize: '1.1rem',
  		margin: '0',
	},

	button:{
		border: 0,
		outline: 0,
		backgroundColor: 'transparent',
		padding: 0,
		cursor: 'pointer',
		fontSize: '1rem',
		color: 'rgba(0,0,0,0.4)',
	},

 	p: {
  		color: '#999',
  		margin: '0',
  		fontSize: '0.8rem',
	},
}

export default ChatHeader
