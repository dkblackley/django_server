import React, { Component } from 'react'

export class LoginForum extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username : '',
      password : ''
    }

    this.updateName = this.updateName.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.loginRequest = this.loginRequest.bind(this);
  }

  updateName(input) {
    this.setState({username : input.target.value})
  }

  updatePass(input) {
    this.setState({password : input.target.value})
  }

  loginRequest(username, password) {
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render () {
    return (
      <div className="App-body">
        <p>
          Edit <code>src/App.js</code> and save to scream.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" name ="Username" placeholder="Username"
          onChange={this.updateName} />
        <input type="text" name ="Password" placeholder="Password"
          onChange={this.updatePass} />
        <button onClick={() => this.loginRequest(this.name, this.password)}>Hello</button>
      </div>
    )
  }
}
