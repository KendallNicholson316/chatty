import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
	state={
		room: {
			name: 's3afternoon',
			description: 'Ask questions and share code',
		},
		rooms:{
			s3afternoon:{
				name: 's3afternoon',
				description: 'Ask questions and share code',
			},
			wild:{
				name: 'wild',
				description: 'wild stuff',
			},
		},
	}
  render() {
    return (
      <div className="Main" style = {styles.Main}>
        <Sidebar 
			user={this.props.user}
			logOut={this.props.logOut}
			rooms={this.state.rooms}
		/>
        <Chat 
			user={this.props.user}
			room={this.state.room}
		/>
      </div>
    )
  }
}

const styles ={
	Main: {
  		display: 'flex',
  		alignItems: 'stretch',
  		height: '100vh',
	},
}

export default Main
