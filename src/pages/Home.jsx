import React, { useState } from 'react';
import Add from '../component/Add';
import Category from '../component/Category';
import View from '../component/View';
import { Link } from 'react-router';

function Home() {
  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({});
  
  const styles = {
    container: {
      backgroundColor: '#0a0e27',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: '80px 20px 60px'
    },
    contentWrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px'
    },
    headerSection: {
      marginBottom: '3rem'
    },
    actionBar: {
      display: 'flex',
      gap: '16px',
      marginBottom: '3rem',
      flexWrap: 'wrap'
    },
    button: {
      padding: '12px 28px',
      fontSize: '15px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.2s ease',
      color: '#ffffff'
    },
    watchHistoryButton: {
      backgroundColor: '#3b82f6',
      boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
    },
    watchHistoryButtonHover: {
      backgroundColor: '#2563eb',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      marginBottom: '3rem'
    },
    gridItem: {
      minWidth: '0'
    },
    allVideosSection: {
      marginTop: '3rem'
    },
    sectionTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '1.5rem',
      letterSpacing: '-0.01em'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        {/* Action Buttons */}
        <div style={styles.actionBar}>
          <Link 
            style={{...styles.button, ...styles.watchHistoryButton}} 
            to={'/watch-hystory'}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
            }}
          >
            Watch History
          </Link>
        </div>

        {/* Header Section: Add and Category */}
        <div style={styles.headerSection}>
          <div style={styles.contentGrid}>
            <div style={styles.gridItem}>
              <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
            </div>
            
            <div style={styles.gridItem}>
              <Category />
            </div>
          </div>
        </div>

        {/* View all videos */}
        <div style={styles.allVideosSection}>
          <h4 style={styles.sectionTitle}>ALL VIDEOS</h4>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
      </div>
    </div>
  );
}

export default Home;