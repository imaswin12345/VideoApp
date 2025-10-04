import React from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { addHistory, deleteAVideo } from '../services/allAPI';
import { toast } from 'react-toastify';

function VideoCard({displayData,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(false);

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
 const dragStarted = (e,id)=>{
  console.log("Drag started");
  e.dataTransfer.setData("cardId",id)
  
 }
  

  const styles = {
    card: {
      width: '18rem',
      backgroundColor: '#1a1f3a',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      color: '#ffffff',
      ...(hovered && {
        transform: 'translateY(-8px)',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
      })
    },
    cardImg: {
      height: '170px',
      objectFit: 'cover',
      cursor: 'pointer',
      backgroundColor: '#0f1629'
    },
    cardBody: {
      padding: '1.5rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    cardTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '0.75rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    captionText: {
      fontSize: '15px',
      textAlign: 'center',
      color: '#ffffffff',
      margin: 0,
      flex: 1
    },
    deleteButton: {
      background: 'none',
      border: 'none',
      color: '#ef4444',
      cursor: 'pointer',
      fontSize: '1.2rem',
      padding: '0.5rem',
      borderRadius: '4px',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        color: '#dc2626'
      }
    },
    modalContent: {
      backgroundColor: '#0a0e27',
      color: '#ffffff',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '12px'
    },
    modalHeader: {
      backgroundColor: '#1a1f3a',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px'
    },
    modalTitle: {
      color: '#ffffff',
      fontWeight: '600'
    },
    modalBody: {
      backgroundColor: '#0a0e27',
      padding: '1.5rem'
    },
    iframe: {
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <>
    {
      displayData &&
    <Card style={styles.card} draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Card.Img onClick={handleShow} style={styles.cardImg} variant="top" src={displayData?.url} />
      <Card.Body style={styles.cardBody}>
        <Card.Title style={styles.cardTitle}>
          <p style={styles.captionText}>
            {displayData?.caption}
          </p>
           <button onClick={()=>handleDelete(displayData?.id)} style={styles.deleteButton}>
             <i className="fa-solid fa-trash"></i>
           </button>
        </Card.Title>
         <Modal show={show} onHide={handleClose} contentClassName="custom-modal">
           <Modal.Header style={styles.modalHeader} closeButton>
             <Modal.Title style={styles.modalTitle}>{displayData?.caption}</Modal.Title>
           </Modal.Header>
           <Modal.Body style={styles.modalBody}>
             <iframe 
               style={styles.iframe}
               width={"100%"} 
               height="400px" 
               src={`${displayData?.embedlink}?autoplay=1`} 
               title="PSG STUNS Real Madrid 4-0  | FIFA Club World Cup Highlights" 
               frameBorder="0"  
               allowFullScreen
             ></iframe>
           </Modal.Body>
         </Modal>
      </Card.Body>
    </Card>
    }
    </>
    
  )
}

export default VideoCard