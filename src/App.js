import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import {auth} from './base'

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

	componentDidMount() {
    	auth.onAuthStateChanged(
      		user => {
        		if (user) {
          		// User is signed in.
          		this.Auth(user)
        		} else {
          			// No user is signed in.
          			this.unAuth()
        		}
    		}
		)
	}
	

	Auth = (oAuthUser) =>{
		const user = {
       		uid: oAuthUser.uid,
       		username: oAuthUser.displayName,
       		email: oAuthUser.email,
     	}
		this.setState({user})
		localStorage.setItem('user', JSON.stringify(user))
	}

	loggedIn = () => {
		return this.state.user.uid
	}

	logOut = () => {
		auth.signOut().then(function() {
  			// Sign-out successful.
			}).catch(function(error) {
  			// An error happened.
		})
	}

	unAuth = () => {
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
      		:	<Login login={this.Auth}/>
			}
			</div>
		)
  }
}

export default App;

