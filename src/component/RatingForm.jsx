import React, {useState} from 'react';
import {Button, Col, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import {Controller, set, useController, useForm} from "react-hook-form";
import {BookRating} from "./BookRating";
import Rating from "react-rating";


const RatingForm = () => {

    const {register, control, handleSubmit, setValue, formState: {errors, isValid, isDirty}, trigger} = useForm({
        mode:"onBlur"
    });
    const [rating, setRating] = useState(0);

    console.log("form-state:", errors );

    const TextInput = ({onChange, onBlur, label, state, value, ...props}) => {
        console.log("state:", state);
        const {invalid} = state;
        return (
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>{label}</Form.Label>
                <Form.Control onBlur={onBlur} onChange={onChange} isInvalid={invalid} defaultValue={value}/>
                {invalid &&
                <Form.Control.Feedback type='invalid'>Bitte teile Sie ihren Namen mit </Form.Control.Feedback>}
            </Form.Group>
        )
    }

    const TextLineInput = ({onChange, value, label}) => {
        return (
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    as={"textarea"}
                    style={{height: '200px'}}
                    value={value}
                    onChange={onChange}/>
            </Form.Group>
        )
    }

    const TextInput2 = (props) => {
        return (
            <FormGroup>
                <FormLabel>Test</FormLabel>
                <FormControl {...props}/>
            </FormGroup>
        )
    }

    const onSubmit = (data) => {
        console.log('Received data = ', data);
        setValue("ratingValue", 0);
        setRating(0);
    }
    return (
        <Row>
            <Col xl={6}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<BookRating color='white' size={3}/>}
                        fullSymbol={<BookRating color='teal' size={3}/>}
                        className={'my-3'}
                        {...register("rating",{min:1})}
                        onChange={(val) => {
                            setValue("ratingValue", val);
                            setValue("rating", val);
                            setRating(val);
                            trigger("ratingValue");
                        }}
                    />

                    <input hidden defaultValue={rating} {...register("ratingValue", {min: 1})}/>
                    {errors.ratingValue && <p className={'text-danger'}>Bitte Bewertung auswählen !!</p>}

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control {...register("name", {required: true})} isInvalid={errors.name}/>
                        <Form.Control.Feedback type={"invalid"}>Bitte verraten SIe uns Ihren
                            Namen!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Titel</Form.Label>
                        <Form.Control {...register("title2", {required: true})} isInvalid={errors.title2}/>
                        <Form.Control.Feedback type={"invalid"}>Bitte geben Sie einen Titel für die Bewertung
                            ein!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Bewertung</Form.Label>
                        <Form.Control style={{height: '150px'}} as='textarea' {...register("text", {required: true})}
                                      isInvalid={errors.text}/>
                        <Form.Control.Feedback type={"invalid"}>Haben Sie nicht etwas vergessen
                            ;-)</Form.Control.Feedback>

                    </Form.Group>

                    <Button disabled={!isDirty} className='mt-3' onClick={handleSubmit(onSubmit)}>Bewertung senden</Button>

                </Form>
            </Col>
        </Row>
    );
};

export default RatingForm;
