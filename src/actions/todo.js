export const EMPTY_TODO_LIST='EMPTY_TODO_LIST';
export const SAVE_NEW_ITEM='SAVE_NEW_ITEM';

export const saveNewItem=(payload)=>{
    return {
        type:SAVE_NEW_ITEM,
        payload
    }
};

export const emptyTodoList=(payload)=>{
    return {
        type:EMPTY_TODO_LIST,
        payload
    }
};