import React, {useState} from 'react'
import {addItem} from '../actions/todo'
import {connect} from 'react-redux'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

const CreateItem = ({addItem}) => {
    const [newItem, setNewItem] = useState('');

    function handleClick() {
        addItem(newItem);
        setNewItem('');
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Form inline className="mt-3">
                        <Form.Group controlId="formBasic">
                            <Form.Control type="text" placeholder="Enter todo item"
                                          value={newItem}
                                          onChange={(e) => setNewItem(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" onClick={() => handleClick()}>
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
    addItem,
})(CreateItem)
