import React, { Component } from 'react';
import './App.css';

class Login extends Component {

  handleClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="flex wrap mar1 auth">
        <div>Prisijunkite prie savo paskyros!</div>
        <div className="flex input flex-center-Y marY1" style={{ backgroundColor: '#164675', color: 'white' }}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png"
            alt="Facebook"
            className="auth-icon"
          />
          Tęsti su Facebook
        </div>
        <div className="flex input flex-center-Y marY1">
          <img
            src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
            alt="Google"
            className="auth-icon"
          />
          Tęsti su Google
        </div>
        <form className="flex wrap">
          <div className="flex input flex-center-Y marY1">
            <i className="far fa-envelope" />
            <input
              type="email"
              label="Įveskite e-mail"
              className="auth-input"
              placeholder="Įveskite email"
            />
          </div>
          <div className="flex input flex-center-Y marY1">
            <i className="fas fa-lock" />
            <input
              type="password"
              label="Įveskite slaptažodį"
              className="auth-input"
              placeholder="Įveskite slaptažodį"
            />
          </div>
          <button onClick={this.handleClick} className="flex input marY1 flex-center">Prisijungti</button>
        </form>
      </div>
    );
  }
};

export default Login;