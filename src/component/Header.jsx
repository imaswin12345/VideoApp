import React, { useState } from 'react'
import { Link } from 'react-router'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  const styles = {
    navbar: {
      backgroundColor: '#0a0e27',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#ffffff',
      textDecoration: 'none',
      letterSpacing: '-0.02em',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    brandIcon: {
      color: '#3b82f6',
      marginRight: '0.5rem',
      fontSize: '1.5rem'
    },
    navDesktop: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    navLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    navLinkHover: {
      color: '#ffffff',
      backgroundColor: 'rgba(59, 130, 246, 0.1)'
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      gap: '5px',
      cursor: 'pointer',
      padding: '8px',
      background: 'transparent',
      border: 'none',
      '@media (max-width: 768px)': {
        display: 'flex'
      }
    },
    hamburgerLine: {
      width: '24px',
      height: '2px',
      backgroundColor: '#ffffff',
      borderRadius: '2px',
      transition: 'all 0.3s ease'
    },
    mobileMenu: {
      position: 'fixed',
      top: '73px',
      left: 0,
      right: 0,
      backgroundColor: '#0f1629',
      borderTop: '1px solid rgba(59, 130, 246, 0.2)',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      opacity: isMenuOpen ? 1 : 0,
      transition: 'all 0.3s ease',
      pointerEvents: isMenuOpen ? 'auto' : 'none'
    },
    mobileNavLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '1.125rem',
      fontWeight: '500',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      display: 'block'
    }
  }

  const handleNavClick = (path) => {
    console.log(`Navigating to ${path}`)
    setIsMenuOpen(false)
    // Add your navigation logic here
  }

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.container}>
          <Link to={'/'} 
            onClick={() => handleNavClick('/')}
            style={styles.brand}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
          >
            <span style={styles.brandIcon}>▶</span>
            VEDDIO
          </Link>
          
          {/* Desktop Navigation
          <div style={{
            ...styles.navDesktop,
            display: window.innerWidth > 768 ? 'flex' : 'none'
          }}>
            <a
              onClick={() => handleNavClick('/home')}
              style={{
                ...styles.navLink,
                ...(hoveredLink === 'home' && styles.navLinkHover)
              }}
              onMouseEnter={() => setHoveredLink('home')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Home
            </a>
            <a
              onClick={() => handleNavClick('/')}
              style={{
                ...styles.navLink,
                ...(hoveredLink === 'start' && styles.navLinkHover)
              }}
              onMouseEnter={() => setHoveredLink('start')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Get Started
            </a>
          </div> */}

          {/* Mobile Hamburger */}
          <button
            style={{
              ...styles.hamburger,
              display: window.innerWidth <= 768 ? 'flex' : 'none'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{
              ...styles.hamburgerLine,
              transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              opacity: isMenuOpen ? 0 : 1
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
            }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        <a
          onClick={() => handleNavClick('/home')}
          style={{
            ...styles.mobileNavLink,
            ...(hoveredLink === 'home-mobile' && {
              color: '#ffffff',
              backgroundColor: 'rgba(59, 130, 246, 0.1)'
            })
          }}
          onMouseEnter={() => setHoveredLink('home-mobile')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Home
        </a>
        <a
          onClick={() => handleNavClick('/')}
          style={{
            ...styles.mobileNavLink,
            ...(hoveredLink === 'start-mobile' && {
              color: '#ffffff',
              backgroundColor: 'rgba(59, 130, 246, 0.1)'
            })
          }}
          onMouseEnter={() => setHoveredLink('start-mobile')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Get Started
        </a>
      </div>
    </>
  )
}

export default Header