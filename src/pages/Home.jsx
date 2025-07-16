import React from 'react';
import Add from '../component/Add';
import Category from '../component/Category';
import View from '../component/View';
import Watchhystory from '../pages/Watchhystory';
import { Link } from 'react-router';
import { useState } from 'react';

function Home() {

  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <div className="container mt-5">
      {/* Top section: Add and Category */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="me-3">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </div>
          <div style={{marginLeft:'10px'}} className=' mt-5 mb-5 d-flex justify-content-between'>
        <Link style={{textDecoration:'none'}} to={'/watch-hystory'}>
        <h4>Watch Hystory</h4>
        </Link>
      </div>
        
        <div className="ms-3">
          <Category />
        </div>
      </div>

      {/* Watch History */}
    

      {/* View all videos */}
      <div>
        <h4>ALL VIDEOS</h4>
        <View uploadVideoServerResponse = {uploadVideoServerResponse}/>
      </div>
    </div>
  );
}

export default Home;