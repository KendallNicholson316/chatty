import React, { Component } from 'react';
import './App.css';

import Main from './Main.js'
import Login from './Login.js'

class App extends Component {
	constructor(){
		super()

		this.state={
			loggedIn: false,
			user:{},
		}
	}

	login = (user) =>{
		this.setState({loggedIn: true,})
		this.setState({user})
	}

  render() {
	if(this.state.loggedIn){
		return(
			<div className="App">
        		<Main user={this.state.user}/>
      		</div>
    	)
	}else{
    	return (
      		<div className="App">
      			<Login login={this.login}/>
      		</div>
    	);
	}
  }
}

export default App;

