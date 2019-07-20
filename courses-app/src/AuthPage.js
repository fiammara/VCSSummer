import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class AuthPage extends Component {
  state = { activeTab: 'login' }

  handleClick = e => {
    console.log(e);
    this.setState({ activeTab: e.target.getAttribute('data-tab') });
    document.querySelector('.tab-active').classList.remove('tab-active');
    e.target.classList.add('tab-active');
  }

  render() {
    return (
      <div style={{ position: "relative", width: "375px", height: "1wh", margin: "auto", marginTop: "64px" }} >
        <div className="auth-tabs flex flex-center">
          <div className="auth-tab tab-active flex-1 flex flex-center" data-tab="login" onClick={this.handleClick}>
            LOG IN
          </div>
          <div className="auth-tab flex-1 flex flex-center" data-tab="signup" onClick={this.handleClick}>
            SIGN UP
          </div>
        </div>
        {this.state.activeTab === "login" ? <Login active="true" /> : <Signup active="true" />}
      </div>
    );
  };
}

export default AuthPage;