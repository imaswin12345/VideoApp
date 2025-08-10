import React, { useEffect, useState } from 'react'
import { Row, Col, Spinner, Alert } from 'react-bootstrap'
import VideoCard from '../component/VideoCard'
import { getAllVideo } from '../services/allAPI'

function View({uploadVideoServerResponse}) {
  const [allVideos, setAllvideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const getAllUploadVideos = async () => {
    try {
      setLoading(true)
      const {data} = await getAllVideo()
      setAllvideos(data)
      setError(null)
    } catch (err) {
      setError("Failed to load videos. Please try again later.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllUploadVideos() 
    setDeleteVideoStatus(false)
  }, [uploadVideoServerResponse, deleteVideoStatus])

  return (
    <div className="container-fluid p-3">
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row className="g-4">
          {allVideos.length > 0 ? (
            allVideos.map(video => (
              <Col key={video.id} xs={12} sm={6} md={4} lg={3}>
                <VideoCard 
                  displayData={video} 
                  setDeleteVideoStatus={setDeleteVideoStatus} 
                />
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <p className="fw-bold fs-5">No videos to display</p>
            </Col>
          )}
        </Row>
      )}
    </div>
  )
}

export default View