import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Button from '../pages/Button.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'

function LandingPage() {
  const navigateByUrl = useNavigate()
  const navigate = () => {
    navigateByUrl('/home')
  }
  
  return (
    <div className="container-fluid px-3 px-md-5">
      <Row className='mt-3 mt-md-5'>
        <Col xs={12} md={6} lg={5} className='mb-4 mb-md-0'>
          <h2>Welcome to <span className='text-warning'>VEDDIO</span></h2>
          <p style={{ textAlign: 'justify' }}>
            Our React Media Player is a lightweight, modern application designed for seamless audio and video playback. Built with React's powerful component-based structure, it allows users to stream and control media with ease. Whether it's music, movies, or podcasts, the player provides a fluid and responsive experience.
          </p>
          <button 
            onClick={navigate} 
            type="button" 
            className="shiny-text btn btn-outline-info mt-3 me-4"
          >
            Get Started
          </button>
        </Col>

        <Col xs={12} md={6} lg={7} className='d-flex justify-content-center'>
          <img
            className='img-fluid'
            src="https://cdn.prod.website-files.com/6469e2294ac68c3d5caea372/66c7089ed070c980ebe8fe28_65a2c9f873352e86a39bf7ae_GO.gif"
            alt="landing/"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
      </Row>

      <div className='mt-5 mb-5 text-center'>
        <h4 className='Fetu'>Features</h4>

        <Row className='mt-4 g-4 justify-content-center'>
          {[
            {
              img: "https://media.tenor.com/Ob7Y0A4KFyQAAAA1/setting-icon.webp",
              title: "Managing Videos",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
              img: "https://media.istockphoto.com/id/1178909529/vector/line-icons-editable-stroke-pixel-perfect-for-mobile-and-web-contains-such-icons-as.jpg?s=612x612&w=0&k=20&c=pXI532lzP7XPsGdOm2d6tiUI2WTtuOVhU1JwfVRnZmQ=",
              title: "Categorize Videos",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
              img: "https://media.tenor.com/mxYtswglHpsAAAAM/stars-gif.gif",
              title: "Watch History",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
          ].map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={4} className='d-flex justify-content-center'>
              <Card style={{ width: '100%', maxWidth: '18rem' }}>
                <Card.Img variant="top" src={feature.img} style={{ height: '180px', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className='row mt-5 mb-5'>
        <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
          <h3 className='text-warning'>Simple Fast Powerful</h3>
          <h4>Play Everything</h4>
          <p>A music player is a software application or hardware device that plays audio files. It allows users to play and organize their favorite media seamlessly.</p>

          <h3 className='text-warning'>Manage History</h3>
          <h4>Track Playback</h4>
          <p>Users can track what they have watched or listened to, enabling an easy return to favorite content at any time.</p>

          <h3 className='text-warning'>Categorize Easily</h3>
          <h4>Smart Sorting</h4>
          <p>Group your music, videos, or podcasts based on genre, artist, or custom categories for a personalized experience.</p>
        </div>

        <div className='col-12 col-lg-6'>
          <div className='ratio ratio-16x9'>
            <iframe 
              src="https://www.youtube.com/embed/X7hdUmMJmoQ" 
              title="One of The Greatest 0 G/A Performance You'll Ever See" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage