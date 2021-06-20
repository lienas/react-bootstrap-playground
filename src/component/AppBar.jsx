import React from 'react';
import {Button, Nav, Navbar, NavItem} from "react-bootstrap";
import {List} from 'react-bootstrap-icons'

const AppBar = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Nav className='container-fluid mx-4'>
                <NavItem>
                    <h1 className="text-uppercase h6 text-white">
                        Lyn Konner
                    </h1>
                </NavItem>
                <NavItem className='ml-auto'>
                    <Button variant='outline-dark'><List color='white'/></Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default AppBar;
