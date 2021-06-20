import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {books} from "../data/books";
import {Button, Col, Image, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";

function Column(props) {
    return null;
}

Column.propTypes = {children: PropTypes.node};
const Book = () => {
    const [book, setBook] = useState({});
    const {id} = useParams();
    console.log('Component Book called wit id=', id);

    useEffect(() => {
        setBook(books[id]);
    }, [id])

    const bookdetails = book.data ? book.data : null;
    console.log(bookdetails);

    if (!book) {
        return <h2 className='text-white'>no book</h2>
    }

    if (!bookdetails) {
        return <h2>Lade ...</h2>
    }

    return (
        <>

            <Row>
                <Col md={6} sm={12} xl={4}>
                    <Image fluid src={bookdetails.cover}/>
                </Col>
                <Col className='my-auto'>
                    <h3 className='h6'>{bookdetails.series}</h3>
                    <h2 className='text-primary text-uppercase'>
                        {book.displayName}
                    </h2>
                    <div dangerouslySetInnerHTML={{__html: bookdetails.content}}/>
                    <Button>Kaufen</Button>
                    <Button className='mx-1' variant='info'>mehr erfahren</Button>
                </Col>

            </Row>
        </>
    );
};

export default Book;
