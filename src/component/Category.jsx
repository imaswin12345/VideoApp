import React, { useEffect } from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToastContainer,toast,Bounce } from 'react-toastify';
import { saveCategory } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import {getAllCategory}from '../services/allAPI'
import {deleteategory} from '../services/allAPI'


function Category() {
  const [show, setShow] = useState(false);

  const [allCategory,setAllcategory] = useState([])
   
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [categoryName,setCategoryName] = useState("")

    const handleGetCategory = async()=>{

      //make api  call


      const {data} = await getAllCategory()
      setAllcategory(data);
      
    }

    console.log(allCategory);
    

    useEffect(()=>{
      handleGetCategory()
    },[])

    const handelCategoryName = async()=>{

      if(categoryName){
        const body = {categoryName} 
        toast.success(`${categoryName} category Created Successfully`)



        const response = await saveCategory(body)
        // call handele get categorys
        
        handleGetCategory()

        if(response.status===200 ){

             

        
           // hide modal

           handleClose()

           //reset state

           setCategoryName("")
           

           

           

        }

      }else{
        toast.warning("Enter Category Name")
      }

      
      
    }

    const handeleDeleteCatogary = async (id)=>{
        // make api call
        await deleteategory(id)
        // get all category

        handeleDeleteCatogary()

        // delete chyethath appo thanne kananel 

        handleGetCategory()
      }
  return (
    <>
    <div>
      <button onClick={handleShow} className='btn btn-info'>Add new Category</button>
    </div>
    {
      allCategory?allCategory?.map(item=>(
        
        <div className='border mt-3 mb-3 p-3 rounded'>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handeleDeleteCatogary(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
        </div>
        
      )): <p className='fw-bolder '>Nothing to display</p>
    }
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
        
           <Form className='border border-secondary p-3 rounder'>
     
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
        
      </Form.Group>
       

       
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handelCategoryName} className='btn btn-info' variant="primary">ADD</Button>
          <Button  variant="secondary" onClick={handleClose}>
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