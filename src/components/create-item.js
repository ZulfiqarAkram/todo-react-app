import React, {useState} from 'react'
import {saveNewItem} from '../actions/todo'

const CreateItem = ({saveNewItem}) => {
    const [newItem, setNewItem] = useState();
    return (
        <div>
            <input id="todo-item-input" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
            <button onClick={saveNewItem()}/>
        </div>
    )
};
const mapsStateToProps = (state) => ({});
export default connect(mapsStateToProps, {
    saveNewItem
})(CreateItem)
