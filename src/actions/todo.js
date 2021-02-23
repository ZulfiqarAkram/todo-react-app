export const ADD_ITEM = 'ADD_ITEM';
export const TICK_TODO = 'TICK_TODO';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload
    }
};

export const tickTodo = (payload, index) => {
    return {
        type: TICK_TODO,
        payload,
        index
    }
};

export const updateTodo = (index,todoItemName) => {
    return {
        type: UPDATE_ITEM,
        index,
        todoItemName
    }
};
export const removeTodo = (index) => {
    return {
        type: REMOVE_TODO,
        index
    }
};