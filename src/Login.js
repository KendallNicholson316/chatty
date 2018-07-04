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
            <form className="Login"
                  onSubmit={this.handleSubmit}
            >
                <input
                    autoFocus
                    required
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.uname}
                    onChange={this.handleNameChange}
                />
				<input
					required
					type="password"
					name="password"
					placeholder="password"
					value={this.state.password}
					onChange={this.handlePassChange}
				/>
                <button type="submit">
                    Send
                </button>
            </form>
        )
    }
}

export default Login
