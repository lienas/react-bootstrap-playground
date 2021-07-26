import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Container, Fade} from "react-bootstrap";

const BannerOverlay = (props) => {
    const {image, cta} = props;

    const Overlay = () => {
        return (
            <div className='row justify-content-center'>
                <Col xs={6}>
                    <Card.Img src={image}/>
                </Col>
                <Col xs={12} className='mt-4'>
                    <Button variant="outline-light" href={cta ? cta : '#target'}>mehr erfahren</Button>
                </Col>
            </div>
        )
    }

    return (
        <Container fluid className='banner-overlay'>
            <Fade appear={true} timeout={3000}>
                <Overlay/>
            </Fade>
        </Container>
    );
};

BannerOverlay.propTypes = {
    image: PropTypes.string.isRequired,
    cta: PropTypes.string
}

export default BannerOverlay;
