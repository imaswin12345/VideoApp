import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function LandingPage() {
  return (
    <>
      <Row style={{ marginLeft: '50px' }} className='mt-5 me-5'>
        <Col md={4}>
          <h2> Welcome to <span className='text-warning'>VEDDIO</span></h2>
          <p style={{ textAlign: 'justify' }}>
            Our React Media Player is a lightweight, modern application designed for seamless audio and video playback. Built with React's powerful component-based structure, it allows users to stream and control media with ease. Whether it's music, movies, or podcasts, the player provides a fluid and responsive experience.
          </p>
          <button style={{ marginLeft: '10px' }} type="button" className="btn btn-outline-info mt-3 me-4">Get Started</button>
        </Col>

        <Col md={6} style={{ marginLeft: '50px' }}>
          <img
            style={{ marginLeft: '60px' }}
            className='img-fluid me-3'
            src="https://cdn.prod.website-files.com/6469e2294ac68c3d5caea372/66c7089ed070c980ebe8fe28_65a2c9f873352e86a39bf7ae_GO.gif"
            alt="landing/"
          />
        </Col>
      </Row>

      <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column'>
        <h4 style={{ textAlign: 'center' }}>Features</h4>

        <Row className='mt-4 g-5'>

          <Col md={4} className='d-flex justify-content-center mb-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.tenor.com/mxYtswglHpsAAAAM/stars-gif.gif" />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='d-flex justify-content-center mb-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.tenor.com/mxYtswglHpsAAAAM/stars-gif.gif" />
              <Card.Body>
                <Card.Title>Catogorise Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='d-flex justify-content-center mb-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.tenor.com/mxYtswglHpsAAAAM/stars-gif.gif" />
              <Card.Body>
                <Card.Title>Watch Hystory</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
      <div className='container mt-5 mb-5 d-flex flex-md-row flex-column justify-content-between align-items-start gap-4'>
  <div className='content w-100'>
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

  <div className='video w-100 d-flex justify-content-center'>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/JfP7zfeQrG4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
    </>
  )
}

export default LandingPage
