import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const RatingForm = (props) => {
    const [formName, setFormName] = useState()
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Dein Name</Form.Label>
                <Form.Control type="text" placeholder="Name"
                              onChange={(value) => setFormName(value)}
                              value={formName}
                />
            </Form.Group>
            <Button>Bewertung senden</Button>

        </Form>
    );
};

export default RatingForm;
