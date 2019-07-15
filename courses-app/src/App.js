import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Filter from "./Filter";
import "./App.css";
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

        return (
            <div>
                <Router history={createBrowserHistory()}>
                <Header />
                <Filter />
                <Footer />
                </Router>
            </div>)
    }

    
}

export default App;