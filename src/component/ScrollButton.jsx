import React, {useEffect, useState} from 'react';
import {ArrowDownCircle} from "react-bootstrap-icons";
import {scrollPage} from "../helpers/helpers";

const ScrollButton = () => {
    //const ID_BUTTON = 'btn_' + Math.floor(Math.random() * 100);
    const [idButton, setIdButton]= useState(null);
    console.log('ID_Button', idButton);

    useEffect(() => {
        setIdButton('btn_' + Math.floor(Math.random() * 100));
    },[])

    return (
        <ArrowDownCircle
            color='white'
            height='2em'
            width='2em'
            className='scrollDown'
            id={idButton}
            onClick={() => scrollPage({tag: 'section', id: idButton})}
        />
    );
};

export default ScrollButton;
