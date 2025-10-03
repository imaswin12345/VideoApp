import React from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Add({setUploadVideoServerResponse}) {
  const [video, setVideo] = useState({
    id: "", caption: "", url: "", embedlink: ""   
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractUrl = (e) => {
    const {value} = e.target
    if(value){
      const embadDatan = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video, embedlink: embadDatan})
    } else {
      setVideo({...video, embedlink: " "})
    }
  }

  const handleUpload = async () => {
    const {id, caption, url, embedlink} = video

    if(!id || !caption || !url || !embedlink){
      toast.warning("please fill the form completely!!!")
    } else {
      const response = await uploadVideo(video)

      if(response.status >= 200 && response.status < 300){
        toast.success(`"${response.data.caption}" video uploaded successfully`)
        setUploadVideoServerResponse(response.data)
        setVideo({ id: "", caption: "", url: "", embedlink: "" })
        handleClose()
      } else {
        toast.error("Uploading error.. please perform the operation after sometimes")
      }
    }
  } 

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#1a1f3a',
      borderRadius: '8px',
      border: '1px solid #3b82f6'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      margin: 0,
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#ffffff'
    },
    uploadButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '28px',
      color: '#3b82f6',
      padding: '4px'
    }
  }

  return (
    <>
      <div style={styles.container}>
        <div style={styles.header}>
          <h4 style={styles.title}>Upload New Video</h4>
          <button 
            onClick={handleShow} 
            style={styles.uploadButton}
          >
            <i className="fa-solid fa-folder-plus"></i>
          </button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{
          backgroundColor: '#0a0e27',
          borderBottom: '1px solid #3b82f6',
          color: '#ffffff'
        }}>
          <Modal.Title style={{ color: '#ffffff', fontSize: '1.25rem' }}>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
          backgroundColor: '#0a0e27',
          color: '#ffffff',
          padding: '20px'
        }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Enter Video ID" 
                onChange={(e) => setVideo({...video, id: e.target.value})}
                style={{
                  backgroundColor: '#1a1f3a',
                  border: '1px solid #3b82f6',
                  color: '#ffffff'
                }}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Enter Video Caption" 
                onChange={(e) => setVideo({...video, caption: e.target.value})}
                style={{
                  backgroundColor: '#1a1f3a',
                  border: '1px solid #3b82f6',
                  color: '#ffffff'
                }}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Enter Video Image Url" 
                onChange={(e) => setVideo({...video, url: e.target.value})}
                style={{
                  backgroundColor: '#1a1f3a',
                  border: '1px solid #3b82f6',
                  color: '#ffffff'
                }}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Enter Youtube Video Link" 
                onChange={extractUrl}
                style={{
                  backgroundColor: '#1a1f3a',
                  border: '1px solid #3b82f6',
                  color: '#ffffff'
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer style={{
          backgroundColor: '#0a0e27',
          borderTop: '1px solid #3b82f6'
        }}>
          <Button 
            onClick={handleUpload} 
            style={{
              backgroundColor: '#3b82f6',
              border: 'none'
            }}
          >
            Upload
          </Button>
          <Button 
            variant="secondary" 
            onClick={handleClose}
            style={{
              backgroundColor: '#6b7280',
              border: 'none'
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000}
        transition={Bounce}
      />
    </>
  )
}

export default Add