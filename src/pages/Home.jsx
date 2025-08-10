import React from 'react';
import Add from '../component/Add';
import Category from '../component/Category';
import View from '../component/View';
import Watchhystory from '../pages/Watchhystory';
import { Link } from 'react-router';
import { useState } from 'react';

function Home() {
  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({});
  
  return (
    <div className="container mt-3 mt-md-5">
      {/* Top section: Add and Category */}
      <div className="row justify-content-between align-items-center mb-4">
        <div className="col-12 col-md-5 mb-3 mb-md-0">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </div>
        
        <div className="col-12 col-md-5 mb-3 mb-md-0">
          <Category />
        </div>
      </div>

      {/* Watch History */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-end">
          <Link style={{textDecoration:'none'}} to={'/watch-hystory'}>
            <h4 className="mb-0">Watch History</h4>
          </Link>
        </div>
      </div>

      {/* View all videos */}
      <div className="row">
        <div className="col-12">
          <h4>ALL VIDEOS</h4>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
      </div>
    </div>
  );
}

export default Home;