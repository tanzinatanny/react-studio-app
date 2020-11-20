import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Scroll from './scroll';
import React, { Component } from "react";



 class App extends Component{
    render() {
        return (
            <div className={App}>
                <h1>Unlimited cat loader</h1>
                <Counter    />
                <Scroll />

            </div>

        );
    }
}

export default App;
