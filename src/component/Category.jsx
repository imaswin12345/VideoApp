import React from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function Category() {
  const [show, setShow] = useState(false);
   ;
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div>
      <button onClick={handleShow} className='btn btn-info'>Add new Category</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Categoryt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Form</p>
           <Form className='border border-secondary p-3 rounder'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Category ID" />
        
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Category Caption" />
        
      </Form.Group>
       

       
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-info' variant="primary">Upload</Button>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category