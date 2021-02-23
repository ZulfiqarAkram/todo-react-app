import {ADD_ITEM, TICK_TODO, UPDATE_ITEM,REMOVE_TODO} from '../actions/todo'

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
    ],
};

const todo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log("ADD_ITEM");
            let todoItem = [...state.todoItemsList];
            todoItem.push({
                name: action.payload,
                isDone: false
            });
            return {
                ...state,
                todoItemsList: [...todoItem]
            };
        case TICK_TODO:
            console.log("TICK_TODO");

            let todoItemChecked = [...state.todoItemsList];
            todoItemChecked[action.index].isDone = action.payload;
            return {
                ...state,
                todoItemsList: [...todoItemChecked]
            };
        case UPDATE_ITEM:
            console.log("UPDATE_ITEM");
            let updateItem = [...state.todoItemsList];
            updateItem[action.index].name = action.todoItemName;
            return {...state, todoItemsList: [...updateItem]};
        case REMOVE_TODO:
            console.log("REMOVE_ITEM");
            let removeItem = [...state.todoItemsList];
            removeItem.splice(action.index,1);
            return {...state, todoItemsList: [...removeItem]};

        default:
            return state

    }
};

export default todo;