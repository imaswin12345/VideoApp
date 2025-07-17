import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router'
import {getHistory} from '../services/allAPI'

function Watchhystory() {


  const [history,setHistory] = useState([])

  const getWatchHistory = async ()=>{

    const {data} = await getHistory()

    setHistory(data);

    
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
        </tr>

        ))
        : <p>Nothing To display</p>
     
}
      
    </tbody>
    </table>



    </>
 
  )
}

export default Watchhystory