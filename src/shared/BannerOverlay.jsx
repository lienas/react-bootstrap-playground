import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Collapse, Container, Fade, Row} from "react-bootstrap";
import { useSpring, animated } from 'react-spring';

const BannerOverlay = (props) => {
    const {image, cta} = props;
    const animationProps = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 300,
        config: {
            duration: 5000
        }
    })


    const Overlay = () => {
        return (
            <animated.div className='row justify-content-center' style={animationProps}>
                <Col xs={6}>
                    <Card.Img src={image}/>
                </Col>
                <Col xs={12} className='mt-4'>
                    <Button variant="outline-primary" href={cta ? cta : '#target'}>mehr erfahren</Button>
                </Col>
            </animated.div>
        )
    }

    return (
        <Container fluid className='banner-overlay'>
            <Overlay />
        </Container>
    );
};

BannerOverlay.propTypes = {
    image: PropTypes.string.isRequired,
    cta: PropTypes.string
}

export default BannerOverlay;
