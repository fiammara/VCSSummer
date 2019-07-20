import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class AuthPage extends Component {
  state = { activeTab: "login" }

  handleClick = target => {
    this.setState({ activeTab: target.target.getAttribute("data-tab") });
  }

  render() {
    return (
      <div style={{ position: "relative", width: "375px", height: "1wh", margin: "auto",  marginTop: "64px" }} >
        <div className="auth-tabs">
          <div className="auth-tab" data-tab="login" onClick={this.handleClick}>
            LOG IN
          </div>
          <div className="auth-tab" data-tab="signup" onClick={this.handleClick}>
            SIGN UP
          </div>
        </div>
        {this.state.activeTab === "login" ? <Login /> : <Signup />}
      </div>
    );
  };
}

export default AuthPage;