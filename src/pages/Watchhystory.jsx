import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router'
import {getHistory,deleteHistory} from '../services/allAPI'
import { Bounce, ToastContainer,toast } from 'react-toastify';

function Watchhystory() {


  const [history,setHistory] = useState([])

  const getWatchHistory = async ()=>{

    const {data} = await getHistory()

    setHistory(data);

    
  }

  // delete watch hystory

  const handleDeleteHystory = async (id)=>{
    
    const response = await deleteHistory(id)

    if(response.status==200){
    toast.success("History item deleted successfully!")
    getWatchHistory()
  }else{
    toast.error("Failed to delete history item")
  }
}

  useEffect(()=>{
    getWatchHistory()
  },[])

  console.log(history);
  

  return (
    <>

    <div className='container mt-5 mb-5 d-flex justify-content-between'> 
      <h3>Watch Hystory</h3>
      <Link style={{textDecoration:'none',fontSize:'20px',color:'White'}} to={'/home'}><i className="me-2 fa-solid fa-arrow-left"></i>Back to Home</Link>
    </div>

    <table className='container mt-5 mb-5 table'>
      <thead>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Time Stamp</th>
      </thead>
    
    <tbody style={{color:'red'}}>
      {
        history?.length>0?
        history.map((item,index)=>(
          <tr>
           <td>{index+1}</td>
      <td>{item?.caption}</td>
      <td><a href={item?.embedlink}>{item?.embedlink}</a></td>
      <td>{item?.timestamp}</td>
      <button onClick={()=>handleDeleteHystory(item.id)} style={{ background: 'none', border: 'none' }}><td><i className="fa-solid fa-trash"></i></td></button>
      
      
        </tr>

        ))
        : <p>Nothing To display</p>
     
}
      
    </tbody>
    </table>

      <ToastContainer
           position='top-center'
           theme='colored'
           autoClose={2000}
           transition={Bounce}
           />



    </>
 
  )
}

export default Watchhystory