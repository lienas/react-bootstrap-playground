import React, {useEffect, useState} from 'react';
import {books} from "../data/books";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import BackToTop from "./BackToTop";
import BannerCarousel from "./BannerCarousel";
//import


const BookList = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        setAllBooks(books);
    }, [])

    const Books = () => {
        return (allBooks.map(book => {
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
        )
    }

    return (
        <Container fluid className='bg-secondary'>
            {/*<HeroBanner/>*/}
            <BannerCarousel/>
            <BackToTop/>
            <section>
                <Container>
                    <h2 className='text-primary text-center py-3'>Secretum</h2>
                    <Row className='justify-content-around'>
                        <Books/>
                    </Row>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet autem eaque et ex officiis
                        ratione voluptatem. Animi asperiores atque commodi consequuntur, cum delectus dignissimos dolore
                        dolores in iusto minima, officia perferendis sequi sit soluta tempore velit voluptas. Aliquid
                        asperiores assumenda fugiat illum libero minima nesciunt perspiciatis reiciendis temporibus vel?
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, consequatur distinctio
                        doloribus eius excepturi fugiat, ipsum magnam maiores nam, omnis praesentium quas ratione rerum
                        sunt
                        tempora! Amet aut autem delectus dignissimos dolorem doloremque eveniet impedit in, ipsum magnam
                        molestias mollitia nostrum omnis perferendis quaerat quisquam, ratione repellendus tempore
                        veniam
                        voluptatum. Adipisci, aliquid animi beatae commodi consequuntur debitis deleniti, deserunt dicta
                        dignissimos ducimus ea enim facilis fugit incidunt iste laborum molestias nihil nisi, non
                        officia
                        perferendis perspiciatis quam qui ratione suscipit tempora voluptas voluptatem? Assumenda
                        doloribus,
                        facere in iste magnam maiores maxime minus natus nobis officia quia quod rem sequi tenetur
                        voluptas.
                        Accusantium, at commodi debitis dolorum ex excepturi, expedita ipsa laboriosam maiores possimus
                        reiciendis rerum saepe tempora totam voluptate voluptatem voluptatum. Aliquid dolor ducimus eos
                        laboriosam minus? Adipisci, deserunt dolorum eligendi fugiat ipsum modi nobis obcaecati officiis
                        placeat provident, quaerat quisquam quo repellat repudiandae sapiente. Accusantium alias
                        corporis
                        ipsam obcaecati quaerat quidem? Cum expedita, mollitia. Ad ipsa nisi nulla, pariatur quod
                        temporibus. Ad dolore et impedit laudantium quasi quo suscipit ut vel? Adipisci assumenda autem
                        beatae cumque debitis dicta distinctio dolores ducimus eligendi eos est eum ex expedita fuga
                        fugit
                        id inventore ipsam, laudantium libero maxime minima mollitia nobis numquam officiis placeat
                        provident quisquam rem repellendus repudiandae sint, suscipit ullam veritatis voluptates. Aut
                        commodi, dolore doloribus earum fugit ipsam mollitia quo reiciendis rem repudiandae. Ab
                        blanditiis
                        consequatur cumque eaque ex inventore labore nisi quam similique. Labore libero minima molestiae
                        necessitatibus nemo officiis optio perspiciatis saepe sequi! Dolorum nihil, quis! Quo.</p>
                </Container>
            </section>

        </Container>
    );
};

export default BookList;
