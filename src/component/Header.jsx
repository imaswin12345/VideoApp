import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-dark text-decoration-none">
          <i className="fa-solid fa-forward me-2"></i>
          VEDDIO
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="text-dark px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-dark px-3">
              Get Started
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header