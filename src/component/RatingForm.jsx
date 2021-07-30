import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import {BookRating} from "./BookRating";
import Rating from "react-rating";


const RatingForm = (props) => {
    const {control, handleSubmit} = useForm();

    const TextInput = ({onChange, label}) => {
        return (
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>{label}</Form.Label>
                <Form.Control onChange={onChange}/>
            </Form.Group>
        )
    }

    const TextLineInput = ({onChange, value, label}) => {
        console.log('TextArea = ', value);
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

    const StarInput = (field) => {
        return (
            <>
                <Rating
                    {...field}
                    initialRating={field.value}
                    emptySymbol={<BookRating color='white' size={3}/>}
                    fullSymbol={<BookRating color='teal' size={3}/>}
                    className={'my-3'}
                />
            </>
        )
    }

    const onSubmit = (data) => {
        console.log('Received data = ', data);
    }
    return (
        <Row>
            <Col xl={6}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        render={({field}) =>
                            <StarInput {...field}/>
                        }
                        name={"rateValue"}
                    />
                    <Controller
                        control={control}
                        render={({field: {value, onChange}}) =>
                            <TextInput onChange={onChange} label={'Name'}/>
                        }
                        name={"name"}/>
                    <Controller
                        control={control}
                        name={"text"}
                        render={({field: {value, onChange, ref}}) =>
                            <TextLineInput onChange={onChange} value={value} label={'Bewertung'}/>
                        }
                        
                    />

                    <Button onClick={handleSubmit(onSubmit)}>Bewertung senden</Button>

                </Form>
            </Col>
        </Row>
    );
};

export default RatingForm;
