import React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const NavigationBar = () => {
    return(
        <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Andrew</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Porfolio</Nav.Link>
            <Nav.Link href="/">Resume</Nav.Link>
            <Nav.Link href="/">Github</Nav.Link>
            <Nav.Link href="/me">About Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default NavigationBar;