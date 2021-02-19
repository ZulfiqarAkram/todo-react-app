import React, {Component} from 'react';
import './App.css';
import CreateItem from './components/CreateItem'
import TodoItem from "./components/TodoItem";
import {Navbar} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="#">Welcome to Todo App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                </Navbar>
                <CreateItem/>
                <TodoItem/>
            </div>
        );
    }
}

export default App;