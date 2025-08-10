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

  const handleGetCategory = async () => {
    const { data } = await getAllCategory();
    setAllCategory(data);
  };

  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleCategoryName = async () => {
    if (categoryName) {
      const body = {
        categoryName,
        allVideos: []
      };

      const response = await saveCategory(body);

      if (response.status === 200) {
        toast.success(`${categoryName} category created successfully`);
        handleGetCategory();
        handleClose();
        setCategoryName("");
      }
    } else {
      toast.warning("Enter Category Name");
    }
  };

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    handleGetCategory();
  };

  const dragOver = (e) => {
    e.preventDefault();
    console.log("Dragging over the Category");
  };

  const videoDropped = async (e, categoryId) => {
    const videoCardId = e.dataTransfer.getData("cardId");
    console.log("Inside Category ID: " + categoryId);
    console.log("Video Card ID: " + videoCardId);

    const selectedCategory = allCategory.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    await updateCategory(categoryId,selectedCategory)
    handleGetCategory()
  };

  return (
    <div className="container-fluid p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Categories</h4>
        <button onClick={handleShow} className='btn btn-info btn-sm'>
          <i className="fa-solid fa-plus me-2"></i>New Category
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {allCategory && allCategory.length > 0 ? 
          allCategory.map(item => (
            <div key={item.id} className="col">
              <div
                className='border p-3 rounded h-100'
                onDragOver={(e) => dragOver(e)}
                onDrop={(e) => videoDropped(e, item.id)}
              >
                <div className='d-flex justify-content-between align-items-center'>
                  <h6 className="mb-0">{item.categoryName}</h6>
                  <button 
                    onClick={() => handleDeleteCategory(item.id)} 
                    className='btn btn-sm btn-outline-danger'
                  >
                    <i className='fa-solid fa-trash'></i>
                  </button>
                </div>
                {item.allVideos?.length > 0 && (
                  <div className="mt-2">
                    <small className="text-muted">
                      {item.allVideos.length} video{item.allVideos.length !== 1 ? 's' : ''}
                    </small>
                  </div>
                )}
              </div>
            </div>
          )) : (
            <div className="col-12">
              <p className='fw-bolder text-center py-4'>No categories found</p>
            </div>
          )
        }
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
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
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button onClick={handleCategoryName} className='btn btn-info'>Add Category</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000}
        transition={Bounce}
      />
    </div>
  )
}

export default Category