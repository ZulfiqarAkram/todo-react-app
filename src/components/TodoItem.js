import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Col, ListGroup, Row, Form, Button,ButtonGroup} from 'react-bootstrap'
import {
    tickTodo,
    updateTodo,
    removeTodo
} from '../actions/todo'

const TodoItem = ({todoList, tickTodo, updateTodo,removeTodo}) => {

    const [editIndex, setEditIndex] = useState();
    const [editItem, setEditItem] = useState();

    function completedTodo(isDone) {
        return {
            textDecoration: isDone ? 'line-through' : 'none'
        }
    }

    function DoubleClicked(index) {
        setEditIndex(index);
        setEditItem(todoList[index].name)
    }

    function handleUpdateCancel(isNotCancelled = true) {
        if (isNotCancelled) {
            updateTodo(editIndex, editItem);
        }
        setEditIndex(null);
        setEditItem('')
    }

    return (
        <Row className="justify-content-md-center mt-3">
            <Col md="4">
                <ListGroup>
                    {todoList && todoList.map((todo, index) => {
                        return <ListGroup.Item key={index}>
                            <Row>
                                <Col xs lg="1">
                                    <Form.Check
                                        inline
                                        value={todo.isDone}
                                        checked={todo.isDone}
                                        type="checkbox"
                                        id={`todo-item-checkbox-${index}`}
                                        onChange={() => tickTodo(!todo.isDone, index)}
                                    />
                                </Col>
                                <Col md="9" className="text-left" style={completedTodo(todo.isDone)}
                                     onDoubleClick={() => DoubleClicked(index)}>
                                    {editIndex === index ?
                                        <Form inline>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="text" placeholder="Enter todo item"
                                                              value={editItem}
                                                              onChange={(e) => setEditItem(e.target.value)}/>
                                            </Form.Group>
                                        </Form> :
                                        todo.name
                                    }

                                </Col>
                                <Col xs lg="1">
                                    {editIndex === index ?
                                        <ButtonGroup>
                                            <Button variant="primary" size="sm"
                                                    onClick={() => handleUpdateCancel(true)}>
                                                Update
                                            </Button>
                                            <Button variant="secondary" size="sm"
                                                    onClick={() => handleUpdateCancel(false)}>
                                                Cancel
                                            </Button>
                                        </ButtonGroup>
                                        : <Button variant="danger" size="sm" onClick={()=>removeTodo(index)}>Remove</Button>}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </Col>
        </Row>
    )
};

const mapStateToProps = (state) => ({
    todoList: state.todo.todoItemsList
});
export default connect(mapStateToProps, {
    tickTodo,
    updateTodo,
    removeTodo
})(TodoItem)