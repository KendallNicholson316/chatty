import React, {Component} from 'react'

class Login extends Component {
	constructor(){
		super()
		this.state = {
			uname:'',
			password:'',
		}
	}

	handleSubmit = (ev) =>{
        ev.preventDefault()
        this.props.login(this.state.uname)
        this.setState({uname:''})
		this.setState({password: ''})
    }

    handleNameChange = (ev) => {
        this.setState({uname: ev.target.value})
    }

    handlePassChange = (ev) => {
        this.setState({password: ev.target.value})
    }

    render(){
        return(
			<div>
			<h1 style={styles.h1}>WELCOME TO CHATTY</h1>
		  <div style={styles.box}>
            <form className="Login"
                  onSubmit={this.handleSubmit}
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
					type="password"
					name="password"
					placeholder="password"
					value={this.state.password}
					onChange={this.handlePassChange}
					style={styles.input}
				/>
                <button type="submit" style={styles.button}>
                    Login
                </button>
            </form>
		  </div>
			</div>
        )
    }
}

const styles = {
	h1:{
	    color : '#000000',
    	textAlign : 'center',
    	fontFamily: 'Exo 2, sans-serif',
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
		display: 'flex',
		justifyContent: 'center',
        alignItems: 'center',
  		float: 'left',
  		width: '50%',
  		height: '50%',
  		marginLeft: '45vh',
		borderRadius: '25%',
  		border: '25%',
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
