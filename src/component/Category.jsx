import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { saveCategory, getAllCategory, deleteCategory, updateCategory } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
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

    const selectedCategory = allCategory.find(item => item.id === categoryId)
    selectedCategory.allVideos.push(videoCardId)
    await updateCategory(categoryId, selectedCategory)
    handleGetCategory()
  };

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#1a1f3a',
      borderRadius: '8px',
      border: '1px solid #3b82f6'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    title: {
      margin: 0,
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#ffffff'
    },
    newCategoryButton: {
      backgroundColor: '#3b82f6',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '6px',
      color: '#ffffff',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    categoryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px'
    },
    categoryCard: {
      border: '1px solid #3b82f6',
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: '#0a0e27'
    },
    categoryHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px'
    },
    categoryName: {
      margin: 0,
      fontSize: '1rem',
      fontWeight: '600',
      color: '#ffffff'
    },
    deleteButton: {
      backgroundColor: 'transparent',
      border: '1px solid #ef4444',
      color: '#ef4444',
      padding: '4px 8px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    videoCount: {
      fontSize: '12px',
      color: '#9ca3af'
    },
    noCategories: {
      textAlign: 'center',
      padding: '40px 0',
      color: '#9ca3af',
      fontWeight: '600'
    }
  }

  return (
    <>
      <div style={styles.container}>
        <div style={styles.header}>
          <h4 style={styles.title}>Categories</h4>
          <button onClick={handleShow} style={styles.newCategoryButton}>
            + New Category
          </button>
        </div>

        <div style={styles.categoryGrid}>
          {allCategory && allCategory.length > 0 ? 
            allCategory.map(item => (
              <div
                key={item.id}
                style={styles.categoryCard}
                onDragOver={(e) => dragOver(e)}
                onDrop={(e) => videoDropped(e, item.id)}
              >
                <div style={styles.categoryHeader}>
                  <h6 style={styles.categoryName}>{item.categoryName}</h6>
                  <button 
                    onClick={() => handleDeleteCategory(item.id)} 
                    style={styles.deleteButton}
                  >
                    <i className='fa-solid fa-trash'></i>
                  </button>
                </div>
                {item.allVideos?.length > 0 && (
                  <div style={styles.videoCount}>
                    {item.allVideos.length} video{item.allVideos.length !== 1 ? 's' : ''}
                  </div>
                )}
              </div>
            )) : (
              <div style={styles.noCategories}>
                No categories found
              </div>
            )
          }
        </div>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton style={{
          backgroundColor: '#0a0e27',
          borderBottom: '1px solid #3b82f6',
          color: '#ffffff'
        }}>
          <Modal.Title style={{ color: '#ffffff', fontSize: '1.25rem' }}>Add New Category</Modal.Title>
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
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
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
            onClick={handleCategoryName}
            style={{
              backgroundColor: '#3b82f6',
              border: 'none'
            }}
          >
            Add Category
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

export default Category