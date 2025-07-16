import React from 'react'
import { Link } from 'react-router'

function Watchhystory() {
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
      <td>1</td>
      <td>Elclassico</td>
      <td><a href="https://youtu.be/AfpItQBKl04">https://youtu.be/AfpItQBKl04</a></td>
      <td>24/12/2025</td>
      
    </tbody>
    </table>



    </>
 
  )
}

export default Watchhystory