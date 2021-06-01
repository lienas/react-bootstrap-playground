import React from 'react';
import Form from "react-bootstrap/Form";

const DarkModeSwitcher = () => {
    return (
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Darkmode"
            />
        </Form>
    );
};

export default DarkModeSwitcher;
