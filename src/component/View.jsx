import React, { useEffect, useState } from 'react'
import VideoCard from '../component/VideoCard'
import { getAllVideo } from '../services/allAPI'

function View({uploadVideoServerResponse}) {
  const [allVideos, setAllvideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const getAllUploadVideos = async () => {
    try {
      setLoading(true)
      const {data} = await getAllVideo()
      setAllvideos(data)
      setError(null)
    } catch (err) {
      setError("Failed to load videos. Please try again later.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllUploadVideos() 
    setDeleteVideoStatus(false)
  }, [uploadVideoServerResponse, deleteVideoStatus])

  const styles = {
    wrapper: {
      padding: '2rem 0'
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5rem 1rem',
      color: '#ffffff'
    },
    spinner: {
      width: '3rem',
      height: '3rem',
      border: '3px solid rgba(59, 130, 246, 0.3)',
      borderTop: '3px solid #3b82f6',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    errorAlert: {
      backgroundColor: '#1a1f3a',
      color: '#ffffff',
      border: '1px solid #ef4444',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      margin: '2rem 0',
      fontSize: '1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '1.5rem',
      padding: '1rem 0'
    },
    emptyState: {
      textAlign: 'center',
      padding: '5rem 1rem',
      color: '#94a3b8',
      fontSize: '1.25rem',
      fontWeight: '500',
      gridColumn: '1 / -1'
    }
  }

  return (
    <div style={styles.wrapper}>
      {loading ? (
        <div style={styles.loadingContainer}>
          <div style={styles.spinner}></div>
        </div>
      ) : error ? (
        <div style={styles.errorAlert}>
          {error}
        </div>
      ) : (
        <div style={styles.grid}>
          {allVideos.length > 0 ? (
            allVideos.map(video => (
              <VideoCard 
                key={video.id}
                displayData={video} 
                setDeleteVideoStatus={setDeleteVideoStatus} 
              />
            ))
          ) : (
            <div style={styles.emptyState}>
              No videos to display
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default View 