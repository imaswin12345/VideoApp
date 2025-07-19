import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { saveCategory, getAllCategory, deleteCategory, updateCategory } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import { data } from 'react-router';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch all categories
  const handleGetCategory = async () => {
    const { data } = await getAllCategory();
    setAllCategory(data);
  };

  useEffect(() => {
    handleGetCategory();
  }, []);

  // Save new category
  const handleCategoryName = async () => {
    if (categoryName) {
      const body = {
        categoryName,
        allVideos: []
      };

      const response = await saveCategory(body);

      if (response.status === 200) {
        toast.success(`${categoryName} category created successfully`);
        handleGetCategory();  // refresh list
        handleClose();        // close modal
        setCategoryName("");  // clear input
      }
    } else {
      toast.warning("Enter Category Name");
    }
  };

  // Delete category
  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    handleGetCategory(); // refresh list
  };

  // Drag & Drop handlers
  const dragOver = (e) => {
    e.preventDefault();
    console.log("Dragging over the Category");
  };

  const videoDropped = async (e, categoryId) => {
    const videoCardId = e.dataTransfer.getData("cardId");
    console.log("Inside Category ID: " + categoryId);
    console.log("Video Card ID: " + videoCardId);
    // Add logic to update video to this category if needed

    const selectedCategory = allCategory.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    //console.log(selectedCategory);

    await updateCategory(categoryId,selectedCategory)
    handleGetCategory()
    
  };
  return (
 <>
  <div>
    <button onClick={handleShow} className='btn btn-info'>Add new Category</button>
  </div>

  {
    allCategory && allCategory.length > 0 ? allCategory.map(item => (
      <div
        key={item.id}
        className='border mt-3 mb-3 p-3 rounded'
        onDragOver={(e) => dragOver(e)}
        onDrop={(e) => videoDropped(e, item.id)}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <h6>{item.categoryName}</h6>
          <button onClick={() => handleDeleteCategory(item.id)} className='btn'>
            <i className='fa-solid fa-trash text-danger'></i>
          </button>
        </div>
      </div>
     
     
      

      
    )) : (
      <p className='fw-bolder'>Nothing to display</p>
    )
  }

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Add New Category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form className='border border-secondary p-3 rounded'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleCategoryName} className='btn btn-info' variant="primary">ADD</Button>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
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

export default Category