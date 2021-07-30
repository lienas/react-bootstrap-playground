import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {books} from "../data/books";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";
import ScrollButton from "./ScrollButton";
import BookCountdown from "./BookCountdown";
import Rating from "react-rating";
import {BookRating} from "./BookRating";
import RatingForm from "./RatingForm";

function Column(props) {
    return null;
}

Column.propTypes = {children: PropTypes.node};

const Book = () => {
    const [book, setBook] = useState({});
    const [rating, setRating] = useState(3);
    const {id} = useParams();
    console.log('Component Book called wit id=', id);
    console.log('Rating is =', rating);

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

            <div data-portal-component-type='part'>
                <Row className='vh-100 bg-secondary position-relative' as={"section"}>
                    <Col md={6} sm={12} xl={4} className='my-auto'>
                        <Image fluid src={bookdetails.cover}/>
                    </Col>
                    <Col className='my-auto'>
                        <h3 className='h6'>{bookdetails.series}</h3>
                        <h2 className='text-primary text-uppercase'>
                            {book.displayName}
                        </h2>
                        {Date.parse(bookdetails.published) > Date.now() ?
                            <>erscheint in <BookCountdown
                                date={Date.parse(bookdetails.published)}
                            /> </> :
                            `erschienen am ${bookdetails.published}`
                        }

                        {/*<Rating*/}
                        {/*    initialRating={rating}*/}
                        {/*    emptySymbol={<BookRating color='white' size={3}/>}*/}
                        {/*    fullSymbol={<BookRating color='teal' size={3}/>}*/}
                        {/*    onChange={(rate) => setRating(rate)}*/}
                        {/*    className={'my-3'}*/}
                        {/*/>*/}
                        <RatingForm/>

                        <div dangerouslySetInnerHTML={{__html: bookdetails.content}}/>
                        <Button>Kaufen</Button>
                        <Button className='mx-1' variant='info'>mehr erfahren</Button>
                    </Col>
                    <ScrollButton/>
                </Row>
            </div>

            <div data-portal-component-type='part'>
                <Container fluid as='section' className='position-relative'>
                    <div className='pb-5'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus doloremque
                            dolorum, eum minima repellat tempore veritatis. Autem esse iusto nulla odit quasi? At,
                            dolorem
                            eaque error id minima possimus quaerat. Accusamus adipisci corporis dicta, dolorem eveniet
                            exercitationem fugiat harum, illo maxime omnis perspiciatis quam quidem repellendus
                            reprehenderit sed sint soluta! Aut deserunt doloribus ex minima quis sed velit? Ad amet
                            consequatur culpa cumque deleniti deserunt dicta dignissimos dolorum eaque error ex ipsam
                            nihil
                            perspiciatis placeat possimus quos recusandae reprehenderit similique, ullam voluptates!
                            Alias,
                            aliquid animi architecto atque consequuntur dolore doloremque ea eaque enim eveniet
                            excepturi
                            inventore, ipsum magnam maxime omnis pariatur, praesentium quae quam ratione repellendus
                            saepe
                            similique soluta suscipit tempore voluptates! Amet animi at blanditiis commodi cupiditate,
                            deleniti eligendi ex facilis fugit illo impedit ipsa ipsum magnam maxime, minus
                            necessitatibus
                            nemo numquam optio praesentium provident quae quaerat quia quis ratione reprehenderit sint
                            sunt
                            suscipit ut vel voluptas. Aperiam aspernatur cumque est laborum maxime minus, molestiae
                            nulla,
                            numquam obcaecati officia officiis porro quaerat qui quia quidem quis temporibus tenetur
                            velit!
                            A debitis dicta doloremque dolores eveniet, ex facere hic illo in laudantium mollitia nemo
                            nesciunt nihil nisi obcaecati perspiciatis quae quam quas qui quia ratione sit soluta vel,
                            velit
                            veniam. At commodi culpa cupiditate dicta doloremque dolorum explicabo facere fugiat fugit
                            illo
                            libero nesciunt nihil numquam officia omnis, quia quis quod repellat reprehenderit sapiente
                            sed
                            sunt suscipit? Accusamus asperiores est ipsum iusto voluptates! Aperiam beatae, consequatur
                            exercitationem hic magni maiores mollitia officia porro possimus, quod saepe totam ut,
                            velit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloribus nam porro
                            voluptate
                            voluptatum? At cupiditate excepturi facere id ipsum magnam magni modi obcaecati officiis,
                            quibusdam.
                            Atque ducimus incidunt iste iure maiores porro quae qui quis quod voluptatum? Dolore error
                            laboriosam unde. Accusamus animi architecto consequuntur corporis debitis eos esse explicabo
                            incidunt ipsa ipsum itaque iure minima minus nostrum officia omnis quas qui recusandae
                            sapiente
                            sed,
                            sit, suscipit veniam voluptas! Amet ipsa itaque libero, nihil nostrum odit praesentium quo
                            repudiandae voluptas? Asperiores consectetur ea exercitationem minima non obcaecati, optio
                            perspiciatis temporibus veritatis. Est ex molestiae pariatur quaerat quia rerum veritatis?
                            Ab
                            aliquid, animi asperiores, assumenda distinctio dolore eligendi est illo incidunt minima
                            modi
                            molestias nihil nisi, obcaecati officia quibusdam quisquam ratione saepe tempora veritatis!
                            Assumenda aut cumque, eveniet ex facere impedit neque odio officiis quae reiciendis.
                            Accusantium
                            architecto aut beatae blanditiis commodi dolore doloribus eaque error eum expedita fugit
                            illo
                            illum
                            impedit iste iusto laboriosam magni minima modi natus necessitatibus odit omnis possimus
                            quam
                            quidem
                            quo, recusandae reiciendis saepe sunt tenetur ut velit vitae voluptatem voluptatum?
                            Assumenda
                            commodi cumque cupiditate distinctio ducimus fugiat illum magnam minima molestiae molestias
                            nulla
                            placeat possimus provident, quam quis tempore tenetur? Ipsam, nulla, numquam.
                        </p>

                    </div>
                    <ScrollButton/>
                </Container>
            </div>

            <div data-portal-component-type='part'>
                <Container fluid as='section' className='position-relative pb-5'>
                    <h2> new Section</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et incidunt, ipsa libero
                        obcaecati
                        odit
                        quas qui repellat reprehenderit voluptatem! Ab accusantium adipisci aliquid commodi enim eos
                        eveniet
                        excepturi harum, in incidunt laborum nesciunt nihil nobis non praesentium quis rem reprehenderit
                        sapiente? Quia, quis, sapiente. Aspernatur assumenda at beatae consequuntur deserunt dolorum
                        facere
                        hic
                        officia, perspiciatis voluptatum? Accusantium ad consequatur, delectus, doloremque hic
                        laudantium
                        quae
                        quaerat qui quidem rem, reprehenderit repudiandae suscipit tempora? Accusamus, aperiam autem,
                        dolorum
                        enim eos error eum iusto libero modi molestias mollitia optio provident quam ratione suscipit,
                        ut
                        vero?
                        Aliquid amet architecto aspernatur aut commodi consequuntur dolor dolorem ea, esse est et
                        eveniet id
                        impedit ipsum nam nobis optio quos ratione similique velit vero voluptas voluptate. Aliquid aut
                        delectus
                        dignissimos enim id non quia repellat suscipit totam! Architecto asperiores aspernatur
                        consequuntur
                        debitis, distinctio dolorem dolores ea enim illum laborum magnam modi molestiae nam nesciunt
                        nisi
                        non
                        officiis omnis optio perspiciatis placeat quae quas quis quod sit vel vitae voluptatibus. Amet,
                        distinctio dolores eius harum impedit ipsum, laborum modi, numquam quae quam quis sapiente
                        soluta
                        suscipit veritatis voluptatibus. Asperiores consequatur deserunt dignissimos ea eos fuga ipsa
                        quae!
                        Beatae, cumque eos excepturi expedita facere in inventore ipsum libero nemo neque nesciunt omnis
                        provident quis reiciendis sunt, temporibus ut voluptates voluptatibus. Accusantium adipisci
                        aliquid
                        animi architecto at aut autem commodi delectus doloremque doloribus dolorum ea eius esse
                        expedita
                        facilis fugiat fugit inventore ipsa libero minima nam, pariatur placeat possimus, quam quibusdam
                        quisquam quo ratione, repudiandae soluta temporibus ut voluptatem?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquid amet
                        consectetur cumque doloribus ea eaque eum fuga fugiat fugit, iste libero, minima minus nemo
                        provident quibusdam quos rem, temporibus ullam. Amet aperiam eaque facilis obcaecati
                        reprehenderit sint tenetur! Accusantium aliquid amet commodi dolor dolore dolorem doloremque
                        ipsum iusto laborum modi nihil numquam odit officia, pariatur, placeat quas quia quisquam
                        ratione repudiandae rerum suscipit voluptas voluptates. Eaque inventore quidem rerum. Ad
                        blanditiis cupiditate eos excepturi impedit ipsa neque perspiciatis quam qui quod repellat
                        suscipit, tenetur! Aut consectetur esse perferendis quidem similique, veniam veritatis
                        voluptate. Animi assumenda aut cumque delectus illo nesciunt optio quam quia, reprehenderit
                        rerum sed sunt temporibus voluptatum? Animi consequuntur, debitis deserunt dolores eaque
                        eligendi eos mollitia nam neque officia quam, unde ut voluptatem! Accusantium aliquam
                        aperiam aut blanditiis consectetur cumque debitis dolorem ea, explicabo, fugit incidunt
                        labore minus nihil odit omnis pariatur porro repellendus reprehenderit saepe!</p>
                    <ScrollButton/>
                </Container>
            </div>

        </>
    );
};

export default Book;
