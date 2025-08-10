import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getHistory, deleteHistory } from '../services/allAPI'
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Watchhystory() {
  const [history, setHistory] = useState([])

  const getWatchHistory = async () => {
    const { data } = await getHistory()
    setHistory(data);
  }

  const handleDeleteHystory = async (id) => {
    const response = await deleteHistory(id)
    if (response.status == 200) {
      toast.success("History item deleted successfully!")
      getWatchHistory()
    } else {
      toast.error("Failed to delete history item")
    }
  }

  useEffect(() => {
    getWatchHistory()
  }, [])

  return (
    <div className='container mt-3 mt-md-5 mb-5'>
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4'> 
        <h3>Watch History</h3>
        <Link 
          style={{textDecoration:'none', fontSize:'1rem', color:'White'}} 
          to={'/home'}
          className='mt-2 mt-md-0'
        >
          <i className="me-2 fa-solid fa-arrow-left"></i>Back to Home
        </Link>
      </div>

      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
        
          <tbody>
            {history?.length > 0 ? (
              history.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item?.caption}</td>
                  <td>
                    <a href={item?.embedlink} target="_blank" rel="noopener noreferrer">
                      {item?.embedlink.length > 30 ? `${item.embedlink.substring(0, 30)}...` : item.embedlink}
                    </a>
                  </td>
                  <td>{item?.timestamp}</td>
                  <td>
                    <button 
                      onClick={() => handleDeleteHystory(item.id)} 
                      style={{ background: 'none', border: 'none', color: 'red' }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">Nothing to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000}
        transition={Bounce}
      />
    </div>
  )
}

export default Watchhystory