import React from 'react'
import {connect} from 'react-redux'
import {Col, ListGroup, Row} from 'react-bootstrap'

const TodoItem = ({todoList}) => {
    return (
        <Row className="justify-content-md-center mt-3">
            <Col md="auto">
                <ListGroup>
                    {todoList && todoList.map(todo => {
                        return <ListGroup.Item>{todo.name}</ListGroup.Item>
                    })}
                </ListGroup>
            </Col>
        </Row>
    )
};

const mapStateToProps = (state)=>{
    console.log("state",state)
    return state
}

export default connect(mapStateToProps)(TodoItem)