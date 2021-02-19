import {SAVE_NEW_ITEM, EMPTY_TODO_LIST} from '../actions/todo'

const INITIAL_STATE = {
    todoItemsList: [
        {
            name: 'First thing',
            isDone: false
        },
        {
            name: 'Second thing',
            isDone: false
        }
    ]
};

const todo = (state = INITIAL_STATE, action) => {
    console.log("createNewTodoItem called");
    switch (action.type) {
        case SAVE_NEW_ITEM:
            let todoItem = [...state.todoItemsList];
            todoItem.push({
                name: action.payload,
                isDone: false
            });
            return {
                ...state,
                todoItemsList: [...todoItem]
            };
        case EMPTY_TODO_LIST:
            return {...INITIAL_STATE};
        default:
            return state

    }
};

export default todo;