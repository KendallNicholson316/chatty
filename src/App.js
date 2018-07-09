import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'


import Main from './Main.js'
import Login from './Login.js'

class App extends Component {
	constructor(){
		super()

		const user = JSON.parse(localStorage.getItem('user'))
		this.state={
			user:user || {},
		}
	}

	login = (user) =>{
		this.setState({loggedIn: true,})
		this.setState({user})
		localStorage.setItem('user', JSON.stringify(user))
	}

	loggedIn = () => {
		return this.state.user.uid
	}

	logOut = () => {
		this.setState({user:{}})
		localStorage.removeItem('user')
	}

  render() {
		return(
			<div className="App">
			{
			this.loggedIn()
			?<Main 
				user={this.state.user}
				logOut={this.logOut}
			/>
      		:	<Login login={this.login}/>
			}
			</div>
		)
  }
}

export default App;

