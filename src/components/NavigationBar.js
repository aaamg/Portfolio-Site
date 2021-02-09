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
        <Navbar className="color-nav navbar-custom"  expand="lg" style={{ backgroundColor: '#121721'}}>
        <Navbar.Brand href="/" style={{ color: 'white'}}>{"Andrew Garcia"}</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Nav.Link href="/" style={{ color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="/portfolio" style={{ color: 'white'}}>Porfolio</Nav.Link>
            <Nav.Link href="/projects" style={{ color: 'white'}}>Side Projects</Nav.Link>
            {/* <Nav.Link href="/">Resume</Nav.Link> */}
            <Nav.Link href="/socials" style={{ color: 'white'}}>Contact</Nav.Link>
            {/* <Nav.Link href="/me">About Me</Nav.Link> */}
            {/* <Nav.Link target="_blank" href="https://aaamg.github.io/Resume/" style={{ color: 'white'}}>Resume</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default NavigationBar;