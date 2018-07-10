import React, { Component } from 'react'
import base from './base'

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

    componentDidMount = () =>{
		this.syncMessages()
	}

	syncMessages = () =>{
		if(this.messagesRef){
			base.removeBinding(this.messageRef)
		}
        this.messagesRef = base.syncState(`messages/${this.props.room.name}`, 
		{
            context: this,
            state: 'messages',
			asArray: true,
        })
    }

	componentDidUpdate(prevProps, _prevState, _snapshot) {
		if(prevProps.room.name !== this.props.room.name){
			this.syncMessages()
		}
	}

	addMessage = (body) =>{
		const messages = [...this.state.messages]
		const user= this.props.user

		const msg = {
            id: `${user.uid}-{Date.now()}`,
            user,
            body,
        }
		messages.push(msg)

		this.setState({messages})
	}
 
 render() {
    return (
      <div className="Chat" style={styles}>
      	<ChatHeader room={this.props.room}/>
		<MessageList 
			messages={this.state.messages}
			room={this.props.room}
		/> 
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
