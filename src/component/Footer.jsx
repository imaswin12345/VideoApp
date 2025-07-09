import React from 'react'
import { Link } from 'react-router'
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div style={{ width: '100%', height: '300px' }}className='d-flex justify-content-center align-items-center flex-column'>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'> 
        <div style={{width:'300px'}} className="website">
          
          <h4>  <i className="fa-solid fa-forward"></i>{' '} Overview</h4>
<h6>Veddio is a mini React project built by Aswin as part of his full-stack learning journey.</h6>
<h6>This project demonstrates routing, API integration, and component-based UI design.</h6>
<p>Version: 1.0.0</p>
        </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none'}}>landing page </Link>
          <Link to={'/home'} style={{textDecoration:'none'}}>Home Page </Link>
          <Link to={'/watch-hystory'} style={{textDecoration:'none'}}>Watch Hystory </Link>
        </div>
        <div className="guids d-flex flex-column">
          <h4>Guids</h4>
          <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}>React </Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>React Bootsrap  </Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>Routing </Link>
        </div>

        <div>
          <h4>Contact Us</h4>
          <input type="email" placeholder='Enter Your Emial' />
             <Button variant="dark">Submit</Button>

            <div className="d-flex flex-row mt-3">
  <Link style={{fontSize:'10px', textDecoration: 'none'}} to='https://www.instagram.com/'>
    <i className="fa-brands fa-instagram d-flex flex-column mt-4 me-5" style={{fontSize:'30px'}}></i>
  </Link>

  <Link style={{fontSize:'10px', textDecoration: 'none'}} to='https://www.linkedin.com/'>
    <i className="fa-brands fa-linkedin d-flex flex-column mt-4 me-5" style={{fontSize:'30px'}}></i>
  </Link>

  <Link style={{fontSize:'10px', textDecoration: 'none'}} to='https://mail.google.com/'>
    <i className="fa-solid fa-inbox d-flex flex-column mt-4 me-5" style={{fontSize:'30px'}}></i>
  </Link>

  <Link style={{fontSize:'10px', textDecoration: 'none'}} to='https://x.com/'>
    <i className="fa-brands fa-x-twitter d-flex flex-column mt-4 me-5" style={{fontSize:'30px'}}></i>
  </Link>

  
</div>

          
          

       
        </div>
      </div>  
      <p style={{ display: 'flex', justifyContent: 'center', marginTop:'55px'}}>
        Copyright &copy; 2025 veddio, Built with React
      </p>
    </div>
  )
}

export default Footer