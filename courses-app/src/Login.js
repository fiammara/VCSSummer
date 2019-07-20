import React, { Component } from 'react';
import './App.css';

class Login extends Component {

  handleClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="flex wrap mar1">
        <div className="flex input flex-center marY1">
          <i className="far fa-envelope" />
          FACEBOOK
        </div>
        <div className="flex input flex-center marY1">
          <i className="far fa-envelope" />
          GOOGLE
        </div>
        <form className="flex wrap">
          <div className="flex input flex-center marY1">
            <i className="far fa-envelope" />
            <input
              type="email"
              label="Įveskite e-mail"
              className="auth-input"
              placeholder="Įveskite email"
            />
          </div>
          <div className="flex input flex-center marY1">
            <i className="fas fa-lock" />
            <input
              type="password"
              label="Įveskite slaptažodį"
              className="auth-input input"
              placeholder="Įveskite slaptažodį"
            />
          </div>
          <button onClick={this.handleClick} className="flex input flex-center marY1">Mygtukas</button>
        </form>
      </div>
    );
  }
};

export default Login;