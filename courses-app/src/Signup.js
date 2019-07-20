import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Signup extends Component {

  handleClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="flex wrap mar1 auth">
        <div>Prisiregistruokite ir pradėkite!</div>
        <div className="flex input flex-center-Y marY1" style={{ backgroundColor: "#164675", color: "white" }}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png"
            alt="Facebook"
            className="auth-icon"
          />
          Registruotis su Facebook
        </div>
        <div className="flex input flex-center-Y marY1">
          <img
            src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
            alt="Google"
            className="auth-icon"
          />
          Registruotis su Google
        </div>
        <div className="flex">Arba</div>
        <form className="flex wrap">
          <div className="flex input flex-center-Y marY1">
            <i className="far fa-user" />
            <input
              type="text"
              label="Vardas Pavardė"
              className="auth-input"
              placeholder="Vardas Pavardė"
            />
          </div>
          <div className="flex input flex-center-Y marY1">
            <div className="flex-2 pd1">Paslaugos teikėjas</div>
            <button className="flex-1 button-select">
              TAIP
            </button>
            <button className="flex-1 button-select">
              NE
            </button>
          </div>
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
          <div className="flex flex-center marY1">
            <input
              type="checkbox"
              name="Naujienlaiškiai"
              className=""
              value="true"
            /> Taip, noriu gauti priminimus apie naujausius pasikeitimus
          </div>
          <button onClick={this.handleClick} className="flex input flex-center marY1">Registruotis</button>
        </form>
        <div className="agreement small-info marY1">Prisiregistruodamas patvirtinu, jog susipažinau ir sutinku su pateiktomis Terms of Use ir Privacy Policy</div>
        <div className="small-info marY1">
          Jau turite savo paskyra?
          <Link to="/auth"> Prisijunkite</Link>
        </div>
      </div >
    );
  }
};

export default Signup;