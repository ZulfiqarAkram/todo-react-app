import {combineReducers} from 'redux'
import todoOperations from './todo'

const rootReducers = () => combineReducers({todo:todoOperations});

export default rootReducers;