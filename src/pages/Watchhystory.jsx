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
    header: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '3rem',
      paddingBottom: '1.5rem',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)'
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#ffffff',
      margin: 0,
      letterSpacing: '-0.01em'
    },
    backLink: {
      textDecoration: 'none',
      fontSize: '1rem',
      color: '#94a3b8',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    backLinkHover: {
      color: '#3b82f6'
    },
    tableResponsive: {
      overflowX: 'auto',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(59, 130, 246, 0.2)'
    },
    table: {
      width: '100%',
      margin: 0,
      backgroundColor: '#1a1f3a',
      color: '#ffffff',
      borderCollapse: 'collapse',
      fontSize: '0.95rem'
    },
    thead: {
      backgroundColor: '#0f1629'
    },
    th: {
      padding: '1.25rem 1rem',
      textAlign: 'left',
      fontWeight: '600',
      color: '#ffffff',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
      whiteSpace: 'nowrap'
    },
    tbody: {},
    tr: {
      transition: 'background-color 0.2s ease'
    },
    trHover: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)'
    },
    td: {
      padding: '1.25rem 1rem',
      borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
      verticalAlign: 'middle'
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    linkHover: {
      color: '#60a5fa',
      textDecoration: 'underline'
    },
    timestamp: {
      color: '#94a3b8',
      fontSize: '0.875rem'
    },
    deleteButton: {
      background: 'none',
      border: 'none',
      color: '#ef4444',
      cursor: 'pointer',
      fontSize: '1.1rem',
      padding: '0.5rem',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    deleteButtonHover: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      color: '#dc2626'
    },
    emptyState: {
      textAlign: 'center',
      color: '#94a3b8',
      fontSize: '1.1rem',
      padding: '3rem 1rem'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.header}>
          <h3 style={styles.title}>Watch History</h3>
          <Link 
            style={styles.backLink} 
            to={'/home'}
            onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
          >
            <i className="fa-solid fa-arrow-left"></i>Back to Home
          </Link>
        </div>

        <div style={styles.tableResponsive}>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Caption</th>
                <th style={styles.th}>URL</th>
                <th style={styles.th}>Time Stamp</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
          
            <tbody style={styles.tbody}>
              {history?.length > 0 ? (
                history.map((item, index) => (
                  <tr 
                    key={item.id} 
                    style={styles.tr}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{item?.caption}</td>
                    <td style={styles.td}>
                      <a 
                        href={item?.embedlink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                        onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                        onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
                      >
                        {item?.embedlink.length > 30 ? `${item.embedlink.substring(0, 30)}...` : item.embedlink}
                      </a>
                    </td>
                    <td style={{...styles.td, ...styles.timestamp}}>{item?.timestamp}</td>
                    <td style={styles.td}>
                      <button 
                        onClick={() => handleDeleteHystory(item.id)} 
                        style={styles.deleteButton}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={styles.emptyState}>Nothing to display</td>
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
    </div>
  )
}

export default Watchhystory