import React, {useState} from 'react'
import {saveNewItem} from '../actions/todo'
import {connect} from 'react-redux'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

const CreateItem = ({saveNewItem}) => {
    const [newItem, setNewItem] = useState();
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Form inline className="mt-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter todo item"
                                          onChange={(e) => setNewItem(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" onClick={()=>saveNewItem(newItem)}>
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
};
const mapsStateToProps = (state) => ({});
export default connect(mapsStateToProps, {
    saveNewItem
})(CreateItem)
