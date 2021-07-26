import React, {useEffect, useState} from 'react';
import {ArrowUpSquare} from "react-bootstrap-icons";

const BackToTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        showScroll &&
        <ArrowUpSquare
            className={`text-white scrollTop`}
            width='2em'
            height='2em'
            onClick={scrollToTop}/>
    );
};

export default BackToTop;
