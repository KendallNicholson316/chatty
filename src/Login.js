import React, {Component} from 'react'
import firebase from 'firebase'

import Background from './computer-3163436.svg'

class Login extends Component {

	constructor(){
		super()
		
		this.state = {

			uid:'',
			email:'',
			uname:'',
			password:'',
		}
	}

	handleGitHub = () =>{
		const provider = new firebase.auth.GithubAuthProvider()
		
		firebase.auth().signInWithPopup(provider).then((result)=> {
  			// This gives you a GitHub Access Token. You can use it to access the GitHub API.
  			var token = result.credential.accessToken;
  			// The signed-in user info.
  			var githubUser = result.user;
  			// ...
			
			this.props.login({
            	uid: githubUser.uid,
            	email: githubUser.email,
            	username: githubUser.displayName
        	})
		}).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// The email of the user's account used.
  		var email = error.email;
  		// The firebase.auth.AuthCredential type that was used.
  			var credential = error.credential;
  		// ...
		})
	}

    handleGoogle = () => {	
			
		const provider = new firebase.auth.GoogleAuthProvider()
					
        firebase.auth().signInWithPopup(provider).then((result) => { 
	    	
			
        // The signed-in user info.
		const googleUser = result.user
		this.props.login({
                uid: googleUser.uid,
                email: googleUser.email,
                username: googleUser.uname
        })		
        // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        })

    }

	handleSignUp = () =>{
		
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((result) => { 
			const regUser = result.user
			this.props.login({
				uid: regUser.uid,
                email: regUser.email,
                username: regUser.uname
			})		
		})
		.catch((error) => {
  			// Handle Errors here.
  			const errorCode = error.code;
  			const errorMessage = error.message;
			alert(errorMessage)
			console.log(errorMessage)
  					
		})
		//this.props.login(this.state.uname)	
	}

	handleLogin = (ev) =>{
		
		ev.preventDefault()
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
			const regUser = result.user
			this.props.login({
				uid: regUser.uid,
                email: regUser.email,
                username: regUser.uname
			})	
        })
		.catch((error) => {
  			// Handle Errors here.
  			const errorCode = error.code;
  			const errorMessage = error.message;
			alert(errorMessage)
			console.log(errorMessage)
  			// ...			
		})
		//this.props.heck(this.state.uname)
        
    }

    handleNameChange = (ev) => {
        this.setState({uname: ev.target.value})
    }

	handleEmailChange = (ev) => {
        this.setState({email: ev.target.value})
    }

    handlePassChange = (ev) => {
        this.setState({password: ev.target.value})
    }

    render(){
        return(
			
		
				<div style={styles.backdrop}>
				
				<h1 style={styles.h1}>Welcome, are you feeling</h1>
				<h2 style={styles.h2}>Chatty</h2>
				
		  <div style={styles.box}>
            <form className="Login"i
               	  onSubmit={ev => this.handleLogin(ev)}   
				  style={styles.form}
            >
                <input
                    autoFocus
                    required
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.uname}
                    onChange={this.handleNameChange}
					style={styles.input}
                />
				<input                    
                    required
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    style={styles.input}
                />
				<input
					required
					type="password"
					name="password"
					placeholder="password"
					value={this.state.password}
					onChange={this.handlePassChange}
					style={styles.input}
				/>
				
                <button type="submit" style={styles.button} onClick={ev=>this.handleLogin(ev)}>
                    Login
                </button>
				
            </form>
			<div>
		  	<button type="submit" style={styles.button} onClick={this.handleGoogle}>sign in with GOOGLE</button>
			<button type="submit" style={styles.button} onClick={this.handleGitHub}>sign in with github</button>
			<button type="submit" style={styles.button} onClick={this.handleSignUp}>Sign Up</button>
			</div>
			</div>
			</div>
        )
    }
}

const styles = {
	backdrop:{		
		background: 'linear-gradient(#bfbaff, white, #bfbaff)',	
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		height: '100vh',    	
	},
	

	h1:{
		marginTop: 0,
		marginBottom: 0,
		paddingTop:'5vh',
	    color : '#000000',
    	textAlign : 'center',
    	fontFamily: 'Satisfy, cursive',
		fontSize: '5vh',
	},
	
	h2:{
		borderBottomLeftRadius: '50% 20%',
  		borderBottomRightRadius: '50% 20%',
		marginTop:0,
        paddingBottom:'5vh',
        color : '#000000',
        textAlign : 'center',
        fontFamily: 'Satisfy, cursive',
		fontSize: '7vh',
	},

	form:{
			
		height: '100%',
  		width: '100%',
  		display: 'inline-block',
  		justifyContent: 'center',
  		alignItems: 'center',
		boxSizing: 'border-box'
		
	},

	box: {
		border:'.25vh solid #818187',
		display: 'flex',
		justifyContent: 'center',
        alignItems: 'center',
  		float: 'left',
  		width: '50%',
  		height: '40%',
  		marginLeft: '45vh',
		borderRadius: '25%',
  		
		padding: '5vh',	
		align:'center',

		background: '#bfbaff'
	},

	input:{
		
		fontSize: '2vh',
		alignItems: 'center',
		width: '80%',
		margin: '2vh',
		marginLeft: '5vh',
		padding: '2vh',
		display: 'block',
	},

	button:{
		border: 0,
		width: '60%',
		margin: '2vh',
        marginLeft: '15vh',
        padding: '2vh',
		border: '2px solid #818187',	
		fontSize: '2vh',
		background: '#c0c0c4',
	},
}

export default Login
