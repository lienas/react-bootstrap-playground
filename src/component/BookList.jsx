import React, {useEffect, useState} from 'react';
import {books} from "../data/books";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";


const BookList = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        setAllBooks(books);
    }, [])

    const Books = () => {
        return allBooks.map(book => {
            return (
                <Col xs={12} md={6} lg={4} xl={3} className='d-flex align-items-stretch'>
                    <Card>
                        <Card.Body>
                            <Card.Img src={book.data.cover}/>
                            <Card.Title class='text-primary'>{book.displayName}</Card.Title>
                            <div className='text-dark'
                                 dangerouslySetInnerHTML={{__html: book.data.content.substring(0, 225) + '...'}}>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <Container>
            <h2 className='text-primary text-center mb-3'>Secretum</h2>
            <Row className='justify-content-center'>
                <Books/>
            </Row>
        </Container>
    );
};

export default BookList;
