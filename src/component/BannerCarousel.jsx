import React from 'react';
import {Button, Carousel} from "react-bootstrap";
import {ArrowDownCircle} from "react-bootstrap-icons";
import {scrollPage} from "../helpers/helpers";

const BannerCarousel = () => {
    const url = "media/MSM-1024x576.jpg"
    const url2 = "media/MSM-1024x448.jpg"

    return (
        <Carousel
            fade={true}
            controls={true}
            indicators={true}
            interval={30000}
            pause={"hover"}
            slide={false}
            variant={"light"}
            wrap={true}
            className='container'
        >
            <Carousel.Item
                style={{
                    // height: 'auto',
                    minHeight: '50vH',
                    backgroundImage: `url(${url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <img
                    className="d-block h-100 ratio ratio-16x9 img-fluid"
                    src={url}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="outline-light" onClick={() => scrollPage({tag: 'section'})}>
                        <ArrowDownCircle className='me-1' color='white' height='2em' width='2em'/>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                    // height: 'auto',
                    minHeight: '25vH',
                }}>
                <img
                    className="d-block w-100 img-fluid mt-3"
                    src={url}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                    // height: 'auto',
                    minHeight: '25vH',
                    //marginTop: '5px'
                }}>
                <img
                    className="d-block w-100 img-fluid mt-3"
                    src={url2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default BannerCarousel;
