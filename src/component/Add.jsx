import React from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { Bounce, ToastContainer,toast } from 'react-toastify';



function Add({setUploadVideoServerResponse}) {
  const [video,setVideo] = useState({
 id:"",caption:"",url:"",embedlink:""   
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractUrl = (e)=>{
    const {value} = e.target
    if(value){
      const embadDatan = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedlink:embadDatan})

    }else{
      setVideo({...video,embedlink:" "})
    }
  }

 const handleUpload = async ()=>{
// GET DETIALS OF VIDEO
  const {id,caption,url,embedlink} = video

  // check video detials are empty or not
  if(!id || !caption || !url || !embedlink){
    toast.warning("please fill the form completetly!!!")

  }else{
    // make api call

    const response = await uploadVideo(video)

    // console log (response)

    if(response.status >= 200 && response.status <300){
      toast.success(`"${response.data.caption}" video uploaded successfully`)
//hide Modal

// set rerver response

setUploadVideoServerResponse(response.data)

//share response via state lifting
setVideo({ id:"",caption:"",url:"",embedlink:"" })
      handleClose()
    }else{
     toast.error("Uploading error.. please perform the operation after sometimes")
    }
  }
 } 

 // make api call

  

  return (
  <>
  <div className='d-flex align-items-center'>
    <h4>Upload New video</h4>
    <button onClick={handleShow} className='btn '><i style={{fontSize:'35px'}} className="fa-solid fa-folder-plus"></i></button>
    

  </div>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Form</p>
           <Form className='border border-secondary p-3 rounder'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
        
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
        
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
        
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={extractUrl} />
        
      </Form.Group>

      
      </Form>

        </Modal.Body>
        <Modal.Footer>
           <Button onClick={handleUpload} className='btn btn-info' variant="primary">Upload</Button>
          <Button variant="secondary" onClick={handleClose}>
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


