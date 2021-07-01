import React, {useRef, useState} from 'react';
import {Button, Container, Nav, Navbar, NavItem} from "react-bootstrap";
import {List, X} from 'react-bootstrap-icons'
import {Link, useHistory} from "react-router-dom";

const AppBar = () => {

    const [show, setShow] = useState(false);
    const history = useHistory();

    const toggleMenu = () => {
        setShow(!show)
    }
    const navigate = (target) => {
        toggleMenu();
        history.push(target);
    }

    return (
        <>
            {show ?
                <div className='MenuOverlay'>
                    <Container>
                        <Nav className='flex-column'>
                            <Nav.Item>
                                <Nav.Link onClick={() => navigate('/')}><h3 className='h1'>Home</h3></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => navigate('/book/0')}><h3 className='h1'>Buch</h3></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => navigate('/books')}><h3 className='h1'>Alle Bücher</h3>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </div> : null
            }
            <Container fluid className='bg-dark' as='section'>
                <Container>
                    <Navbar bg='dark' variant='dark'>
                        <Nav className='container-fluid'>
                            <NavItem>
                                <Link to='/' as='h1' className="text-uppercase h6 text-white text-decoration-none"> Lyn
                                    Konner</Link>
                            </NavItem>
                            <NavItem className='ml-auto z999'>
                                <Button variant='outline-dark' onClick={toggleMenu}>
                                    {show ?
                                        <X color='white'/> :
                                        <List color='white'/>
                                    }
                                </Button>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Container>
            </Container>
        </>

    );
};

export default AppBar;
