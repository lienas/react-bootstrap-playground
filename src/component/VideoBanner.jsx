import React from "react";
import BannerOverlay from "../shared/BannerOverlay";
import {Alert, Container} from "react-bootstrap";
import PropTypes from 'prop-types';
import {useMediaQuery} from "react-responsive/src";

const VideoBanner = (props) => {

    console.log('Component VideoBanner called');

    const {src, image, cta} = props;
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    return (src ?
            <>
                <Container fluid className='hero' component="section">
                    {isDesktopOrLaptop ?
                        <video className='bg-video' src={src} muted autoPlay loop/> :
                        null
                    }
                </Container>
                <BannerOverlay image={image} cta={cta}/>
                <div id='target'/>
            </>
            :
            <Alert variant='warning'>no video detected</Alert>
    )
}

export default props => (
    <VideoBanner {...props} />
)

VideoBanner.propTypes = {
    src: PropTypes.string.isRequired,
    image: PropTypes.string,
    cta: PropTypes.string
}
