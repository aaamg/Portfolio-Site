import React from 'react'

// React Bootstrap
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

// Styling
import './NavigationBar.css'

const NavigationBar = () => {
    return(
        <>
        <Navbar className="color-nav" bg="light" expand="lg">
        <Navbar.Brand href="/">{/* Name can go here or something*/}</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Porfolio</Nav.Link>
            <Nav.Link href="/projects">Small React Projects</Nav.Link>
            {/* <Nav.Link href="/">Resume</Nav.Link> */}
            <Nav.Link target="_blank" href="https://github.com/aaamg">Github</Nav.Link>
            {/* <Nav.Link href="/me">About Me</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default NavigationBar;