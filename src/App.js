import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from './components/Posts';
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <div className="Posts_Container">
                    <PostForm />
                    <Posts />
                </div>
            </div>
        </Provider>
    );
}

export default App;
