import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Filter from "./Filter";
import "./App.css";

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
                    <Header />
                    <Main search={this.handleMain} />
                    <Footer />
                </div>)
        }

        return (
            <div>
                <Header />
                <Filter />
                <Footer />
            </div>)
    }
}

export default App;