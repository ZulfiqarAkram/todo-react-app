import {createStore} from 'redux'
import rootReducers from '../reducers/index'


export default function configureStore() {
    return createStore(rootReducers)
}