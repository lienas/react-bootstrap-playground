import React, {useEffect, useState} from 'react';
import {books} from "../data/books";
import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
//import


const BookList = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        setAllBooks(books);
    }, [])

    const Books = () => {
        return allBooks.map(book => {
            return (
                <Col xs={12} md={6} lg={4} xl={3} className='d-flex align-items-stretch'>
                    <Card bg='secondary' border='secondary' className='my-3'>
                        <Card.Body>
                            <Card.Img src={book.data.cover}/>
                            <Card.Text class='my-0 text-muted fst-italic fs-6'>01.01.2020</Card.Text>
                            <Card.Title class='text-primary fs-5'>{book.displayName}</Card.Title>
                            <div
                                dangerouslySetInnerHTML={{__html: book.data.content.substring(0, 225) + '...'}}>
                            </div>
                        </Card.Body>
                        <Card.Footer class='bg-secondary px-3'>
                            <Button variant='primary' className='btn-sm'>Kaufen</Button>
                            <Button variant='info' className='mx-2 btn-sm'>mehr erfahren</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <section className='bg-secondary'>
            <Container>
                <h2 className='text-primary text-center py-3'>Secretum</h2>
                <Row className='justify-content-around'>
                    <Books/>
                </Row>
            </Container>
        </section>
    );
};

export default BookList;
