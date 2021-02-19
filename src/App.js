import React, {Component} from 'react';
import './App.css';
import CreateItem from './components/CreateItem'
import TodoItem from "./components/TodoItem";
import {Navbar} from 'react-bootstrap'
import {Provider} from 'react-redux'
import configureStore from './store/todo'
import {createStore} from "redux";
import rootReducers from "./reducers";


class App extends Component {
    render() {
        return (
            <Provider store={createStore(rootReducers)}>
                <div className="App">
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand href="#">Welcome to Todo App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    </Navbar>
                    <CreateItem/>
                    <TodoItem/>
                </div>
            </Provider>
        );
    }
}

export default App;
