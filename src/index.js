import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './store/todo'
import {createStore} from "redux";
import rootReducers from "./reducers";


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
