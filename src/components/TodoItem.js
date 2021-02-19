import React from 'react'
import {connect} from 'react-redux'
import {Col, ListGroup, Row, Form, Button} from 'react-bootstrap'

const TodoItem = ({todoList}) => {

    function completedTodo(isDone) {
        return {
            textDecoration: isDone ? 'line-through' : 'none'
        }
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
                                        type="checkbox"
                                        id={`todo-item-checkbox-${index}`}
                                    />
                                </Col>
                                <Col md="9" className="text-left" style={completedTodo(todo.isDone)}> {todo.name}</Col>
                                <Col xs lg="1">
                                    <Button variant="danger" size="sm">Remove</Button>
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
})
export default connect(mapStateToProps)(TodoItem)