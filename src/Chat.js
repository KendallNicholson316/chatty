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

	addMessage = () =>{
		const messages = [...this.state.messages]
		messages.push({
			id: Date.now(),
			user:{
				uid: 'sdf58643972443',
				displayName:'Stefany',
				email: 'stef@ufh.org',
			},
			body: 'lolz',
		})
	
		this.setState({messages: messages})
	}
 
 render() {
    return (
      <div className="Chat">
      	<ChatHeader />
		<MessageList messages={this.state.messages}/> 
		<MessageForm addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default Chat
