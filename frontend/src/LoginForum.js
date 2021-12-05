import React, { Component } from 'react'

export class LoginForum extends React.Component {

  constructor(props) {
    super(props);
    this.state = 2;

    this.loginRequest = this.loginRequest.bind(this);
  }

  loginRequest() {
    console.log(this.state);
    this.state = this.state + 1;
  }

  render () {
    return (
      <div className="App-body">
        <input type="text" name ="Username" placeholder="Username" />
        <input type="text" name ="Password" placeholder="Password" />
        <button onClick={this.loginRequest}>Hello</button>
      </div>
    )
  }
}
