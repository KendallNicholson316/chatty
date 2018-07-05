import React, { Component } from 'react'

import ChatHeader from './ChatHeader.js'
import MessageList from './MessageList.js'
import MessageForm from './MessageForm.js'

class Chat extends Component {
	constructor(){
		super()
		this.state = {
			messages: [],
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
      <div className="Chat" style={styles}>
      	<ChatHeader />
		<MessageList messages={this.state.messages}/> 
		<MessageForm addMessage={this.addMessage}/>
      </div>
    )
  }
}

const styles ={
	flex: '1',
	display: 'flex',
	flexDirection: 'column',	
}

export default Chat
