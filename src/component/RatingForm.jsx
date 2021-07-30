import React, {useState} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";



const RatingForm = (props) => {
    const {control, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log('Received data = ', data);
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                render={({field}) =>
                    <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Dein Name</Form.Label>
                    <Form.Control {...field}/>
                </Form.Group>}
                name={"name"}/>

            <Button>Bewertung senden</Button>

        </Form>
    );
};

export default RatingForm;
