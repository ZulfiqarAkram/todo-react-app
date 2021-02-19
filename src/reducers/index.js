import {combineReducers} from 'redux'
import createNewTodoItem from './todo'

const rootReducers = () => combineReducers({createNewTodoItem});

export default rootReducers;