import React, { Component } from 'react'

import ChatHeader from './ChatHeader.js'
import MessageList from './MessageList.js'
import MessageForm from './MessageForm.js'

class Chat extends Component {
	constructor(){
		super()
		this.state = {
			messages: [
				{
      			id: 1,
      			user: {
       		 		uid: 'sdfs34849327',
        			displayName: 'Davey',
        			email: 'davey@fretless.com',
      			},
      			body: 'Chatting up a storm, yo!',
    			},

    			{	
      			id: 2,
      			user: {
        			uid: 'sdlfkj35948',
        			displayName: 'Dana',
        			email: 'dana@fretless.com',
      			},
      			body: 'This guy is so annoying. I hate my job.',
    			},
			],
		}
	}

	addMessage = (body) =>{
		const messages = [...this.state.messages]
		const user= this.props.user

		messages.push({
			id: `${user.uid}-{Date.now()}`,
			user,
			body,
		})
	
		this.setState({messages})
	}
 
 render() {
    return (
      <div className="Chat" style={styles.Chat}>
      	<ChatHeader />
		<MessageList messages={this.state.messages}/> 
		<MessageForm addMessage={this.addMessage}/>
      </div>
    )
  }
}

const styles ={
	Chat: {
  		flex: '1',
  		display: 'flex',
  		flexDirection: 'column',
	}
}

export default Chat
