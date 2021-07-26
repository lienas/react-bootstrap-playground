import React from 'react';
import {Carousel} from "react-bootstrap";
import {ArrowDownCircle} from "react-bootstrap-icons";

const HeroBanner = () => {
    const url = "media/MSM-1024x576.jpg"

    function scrollPage() {
        const h = window.innerHeight;
        window.scroll(0, h);
        //window.scrollByPages(1);
    }

    return (
        <section><Carousel
            interval={null}
            className='hero-banner'
            controls={false}
            indicators={false}

        >
            <Carousel.Item
                style={
                    {
                        backgroundImage: `url(${url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                }
                className='hero-banner-item'>

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <ArrowDownCircle width='2em' height='2em' cursor='pointer' onClick={scrollPage}/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></section>
    );
};

export default HeroBanner;
