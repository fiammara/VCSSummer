import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Filter from "./Filter";
import Blog from "./Blog";
import Duk from "./Duk";
import Course from "./Components/Course"
import "./App.css";
<<<<<<< HEAD
import { createBrowserHistory } from 'history';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleMain = this.handleMain.bind(this);
    


    }
    state = {
        showFilter: false
    }
    handleMain() {
        this.setState({
            showFilter: true,
        });
    }
    render() {

        if (this.state.showFilter === false) {
            return (
                <div>
                    <Router history={createBrowserHistory()}>
                    <Header />
                    <Main search={this.handleMain} />
                    <Footer />
                    </Router>
                </div>)
        }

=======
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

    render() {

>>>>>>> 03d27f6aa183d001e0ee867ec8cf7e855a68137d
        return (
            <div>
                <Router history={createBrowserHistory()}>
                <Header />

                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/courses/:id" component={Course}></Route>
                    <Route exact path="/filter" component={Filter}></Route>
                    <Route exact path="/duk" component={Duk}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    {/*  <Route exact path="/calendar" component={Calendar}></Route>
                    <Route exact path="/personal" component={Personal}></Route>
                    <Route exact path="/signup" component={Signup}></Route>
                    <Route exact path="/login" component={Login}></Route> */}
                </Switch>

                <Footer />
                </Router>
            </div>)
    }

    
}

export default App;