import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from '../component/VideoCard'
import { getAllVideo } from '../services/allAPI'


function View({uploadVideoServerResponse}) {
  const [allVideos,setAllvideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]  = useState(false)
  
  
  const getAllUploadVideos = async ()=>{
 

    //make an Api call 

    const {data} = await getAllVideo()
    setAllvideos(data);

  }

  useEffect(()=>{
    getAllUploadVideos() 
    setDeleteVideoStatus(false)

  },[uploadVideoServerResponse,deleteVideoStatus])
   


  console.log(allVideos);
  
  return (
    <div>
      <Row>
        {

          allVideos.length>0?
          allVideos.map(video=>( <Col sm={12} md={6} lg={4} xl={3} >
       <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
        </Col>
            
          ))
       

           :  <p className='fw-bolder '>Nothing to display</p>
        }
        
      </Row>
      

    </div>
  )
}

export default View