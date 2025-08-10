import React from 'react'
import { Link } from 'react-router'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={6} lg={3}>
            <div className="website">
              <h4><i className="fa-solid fa-forward me-2"></i>Overview</h4>
              <p className="mb-2">Veddio is a mini React project built by Aswin as part of his full-stack learning journey.</p>
              <p className="mb-2">This project demonstrates routing, API integration, and component-based UI design.</p>
              <p>Version: 1.0.0</p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <div className="links">
              <h4>Links</h4>
              <div className="d-flex flex-column gap-2">
                <Link to={'/'} className="text-white text-decoration-none">Landing Page</Link>
                <Link to={'/home'} className="text-white text-decoration-none">Home Page</Link>
                <Link to={'/watch-hystory'} className="text-white text-decoration-none">Watch History</Link>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <div className="guides">
              <h4>Guides</h4>
              <div className="d-flex flex-column gap-2">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">React</a>
                <a href="https://react-bootstrap.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">React Bootstrap</a>
                <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Routing</a>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <div className="contact">
              <h4>Contact Us</h4>
              <Form className="mb-3">
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
                  <Button variant="outline-light" size="sm">Submit</Button>
                </Form.Group>
              </Form>
              <div className="d-flex gap-3">
                {[
                  {icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/'},
                  {icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/'},
                  {icon: 'fa-solid fa-inbox', url: 'https://mail.google.com/'},
                  {icon: 'fa-brands fa-x-twitter', url: 'https://x.com/'}
                ].map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className={`${social.icon} fs-4`}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              Copyright &copy; 2025 Veddio, Built with React
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer