import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
  return (
    <Navbar className='navbart ' data-bs-theme="dark">
        <Container className='container1'>
          <Navbar.Brand href="#home">Bharat TV - Enjoy your Dreams.....</Navbar.Brand>
          <Nav className="nav-links-nav">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/1qQpdlwxtTkKPtvGM6lJWy2HRC41b5NGnEjow64d8esU/edit?usp=sharing">Documentation</Nav.Link>
            <Nav.Link href="#profie">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar