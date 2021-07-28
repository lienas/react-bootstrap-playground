import React from 'react';
import PropTypes from "prop-types";
import Countdown from "react-countdown";
import {Col, Row} from "react-bootstrap";

const BookCountdown = (props) => {
    const {date} = props;

    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({month, days, hours, minutes, seconds, completed}) => {
        if (completed) {
            // Render a completed state
            return <Completionist/>;
        } else {
            // Render a countdown
            return (
                <Row className='countdown d-flex gx-1' xs={"auto"}>
                    <Col className='text-center'>
                        <div className='countdown-count'>{days}</div>
                        <div className='countdown-caption'>Tage</div>
                    </Col>
                    <Col className='text-center'>
                        <div className='countdown-count'>{hours}</div>
                        <div className='countdown-caption'>Std</div>
                    </Col>
                    <Col className='text-center'>
                        <div className='countdown-count'>{minutes}</div>
                        <div className='countdown-caption'>Min</div>
                    </Col>
                    <Col className='text-center'>
                        <div className='countdown-count'>{seconds}</div>
                        <div className='countdown-caption'>Sek</div>
                    </Col>

                </Row>

            )
        }
    };


    return (
        <Countdown
            date={date}
            renderer={renderer}
            daysInHours={true}
        />
    )
};

export default BookCountdown;

BookCountdown.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.number
    ]).isRequired
}
