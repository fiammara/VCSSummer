import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Courses from "./Courses";
import Home from "./Home";

const App = () => (
    <BrowserRouter>
        <div>
        <div className="NavContainer"> 
            <button className="NavButton">
                <NavLink to="/home">Home</NavLink>
            </button>

            <button className="NavButton">               
                <NavLink to={{ pathname: "/courses" }}>Link to courses</NavLink>
            </button>

        </div>
            <Switch>
                <Route exact path="/courses" component={Courses} /> 
                <Route exact path="/home" component={Home} />               
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
