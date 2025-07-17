import React from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { addHistory, deleteAVideo } from '../services/allAPI';
import { toast } from 'react-toastify';

function VideoCard({displayData,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);
 ;

  const handleClose = () => setShow(false);
  

 
  

  const handleDelete = async (id)=>{

    const response = await deleteAVideo(id)

    if(response.status==200){

      toast.success(`${displayData.caption}Deleted Successfully!!`)
      setDeleteVideoStatus(true)
    }else{
      toast.error(`Unable to Delete ${displayData.caption} Video`)
    }
    
  }

  const handleShow =async () =>{ setShow(true);
const {caption,embedlink}= displayData
// genarate time data

let today = new Date()

const timestamp = new  Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today);
  
// watch video to add json server

let reqBody ={
  caption,embedlink,timestamp
}

await addHistory(reqBody)

  }

  

  
  
  return (
    <>
    {
      displayData &&
    <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} style={{height:"170px"}} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <Card.Text style={{fontSize:'15px',textAlign:"center"}}>
        {displayData?.caption}
        </Card.Text>
           <button onClick={()=>handleDelete(displayData?.id)} style={{ background: 'none', border: 'none' }}>
  <i className="fa-solid fa-trash text-danger mb-4"></i>
</button>
        </Card.Title>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%"} height="400px" src={`${displayData?.embedlink}?autoplay=1`} title="PSG STUNS Real Madrid 4-0  | FIFA Club World Cup Highlights" frameborder="0"  allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
      </Card.Body>
    </Card>
    }



    </>
    
  )
}

export default VideoCard