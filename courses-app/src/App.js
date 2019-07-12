import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Filter from "./Filter";
import Duk from "./Duk";
import "./App.css";
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

    render() {
        
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/filter" component={Filter}></Route>
                    <Route exact path="/duk" component={Duk}></Route>
                </Switch>

                <Footer />
            </div>)
    }
}

export default App;