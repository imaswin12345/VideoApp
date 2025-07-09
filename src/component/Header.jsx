import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router'


function Header() {
  return (
  <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{color:'black',textDecoration:'none'}}>
            <i className="fa-solid fa-forward"></i>{' '}
          VEDDIO
           </Link>
           <Link style={{textDecoration:'none',color:'black',fontSize:14}} to="/home">
           <a style={{marginLeft:'900px'}}>HOME</a>
           </Link>
           
            <Link style={{textDecoration:'none',color:'black',fontSize:14}} to="/">
           <a style={{marginLeft:'25px'}}>Get Started</a>
           </Link>
           
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header