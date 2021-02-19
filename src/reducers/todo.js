import {SAVE_NEW_ITEM,EMPTY_TODO_LIST} from '../actions/todo'

const INITIAL_STATE={
    todoItemsList:[
        {
            name:'First thing',
            isDone:false
        },
        {
            name:'Second thing',
            isDone:false
        }
    ]
};

const todoOperations=(state=INITIAL_STATE,action)=>{
    console.log("createNewTodoItem called")
    switch (action.type) {
        case SAVE_NEW_ITEM:
            return {
                ...state,
                todoItemsList: {...state.todoItemsList,...action.payload}
            };
        case EMPTY_TODO_LIST:
            return {...INITIAL_STATE};
        default:
            return state

    }
};

export default todoOperations;