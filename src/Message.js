import React from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

const Message = ({message}) =>{
	return(
		<div className = "Message" >
			<Avatar user={message.user}/>
			<div className = "details">
				<Metadata message={message} />
				<div className = "body">
					{message.body}
				</div>
			</div>
		</div>
	)
}

{/*}
const styles = {
	Message: {
		display: 'flex',
  		marginTop: '1rem',
  		padding: '0 1rem',
	},

}
{*/}
export default Message
