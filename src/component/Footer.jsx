import React, { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState('')
  const [hoveredLink, setHoveredLink] = useState(null)
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const styles = {
    footer: {
      backgroundColor: '#0f1629',
      borderTop: '1px solid rgba(59, 130, 246, 0.2)',
      padding: '5rem 20px 2rem',
      color: '#ffffff'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem'
    },
    section: {
      display: 'flex',
      flexDirection: 'column'
    },
    heading: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    icon: {
      color: '#3b82f6',
      fontSize: '1.25rem'
    },
    paragraph: {
      color: '#94a3b8',
      fontSize: '0.9375rem',
      lineHeight: '1.7',
      marginBottom: '0.75rem'
    },
    version: {
      color: '#64748b',
      fontSize: '0.875rem',
      marginTop: '0.5rem'
    },
    linkContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    link: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.9375rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      width: 'fit-content'
    },
    linkHover: {
      color: '#3b82f6',
      paddingLeft: '0.5rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    input: {
      backgroundColor: '#1a1f3a',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '8px',
      padding: '0.75rem 1rem',
      color: '#ffffff',
      fontSize: '0.9375rem',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    submitButton: {
      backgroundColor: 'transparent',
      border: '1px solid #3b82f6',
      color: '#3b82f6',
      padding: '0.625rem 1.5rem',
      borderRadius: '8px',
      fontSize: '0.9375rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: 'fit-content'
    },
    submitButtonHover: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
    },
    socialContainer: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    },
    socialLink: {
      color: '#94a3b8',
      fontSize: '1.5rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    socialLinkHover: {
      color: '#3b82f6',
      transform: 'translateY(-3px)'
    },
    copyright: {
      textAlign: 'center',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(59, 130, 246, 0.1)',
      color: '#64748b',
      fontSize: '0.875rem'
    }
  }

  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  const handleLinkClick = (path) => {
    console.log(`Navigating to ${path}`)
  }

  const socialLinks = [
    { icon: '📷', name: 'Instagram', url: 'https://www.instagram.com/' },
    { icon: '💼', name: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { icon: '📧', name: 'Email', url: 'https://mail.google.com/' },
    { icon: '🐦', name: 'Twitter', url: 'https://x.com/' }
  ]

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Overview Section */}
          <div style={styles.section}>
            <h4 style={styles.heading}>
              <span style={styles.icon}>▶</span>
              Overview
            </h4>
            <p style={styles.paragraph}>
              Veddio is a mini React project built by Aswin as part of his full-stack learning journey.
            </p>
            <p style={styles.paragraph}>
              This project demonstrates routing, API integration, and component-based UI design.
            </p>
            <p style={styles.version}>Version: 1.0.0</p>
          </div>

          {/* Links Section */}
          <div style={styles.section}>
            <h4 style={styles.heading}>Links</h4>
            <div style={styles.linkContainer}>
              {[
                { name: 'Landing Page', path: '/' },
                { name: 'Home Page', path: '/home' },
                { name: 'Watch History', path: '/watch-hystory' }
              ].map((link, index) => (
                <a
                  key={index}
                  onClick={() => handleLinkClick(link.path)}
                  style={{
                    ...styles.link,
                    ...(hoveredLink === `link-${index}` && styles.linkHover)
                  }}
                  onMouseEnter={() => setHoveredLink(`link-${index}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Guides Section */}
          <div style={styles.section}>
            <h4 style={styles.heading}>Guides</h4>
            <div style={styles.linkContainer}>
              {[
                { name: 'React', url: 'https://reactjs.org/' },
                { name: 'React Bootstrap', url: 'https://react-bootstrap.netlify.app/' },
                { name: 'Routing', url: 'https://reactrouter.com/' }
              ].map((guide, index) => (
                <a
                  key={index}
                  href={guide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.link,
                    ...(hoveredLink === `guide-${index}` && styles.linkHover)
                  }}
                  onMouseEnter={() => setHoveredLink(`guide-${index}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {guide.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div style={styles.section}>
            <h4 style={styles.heading}>Contact Us</h4>
            <form style={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  ...styles.input,
                  ...(isInputFocused && styles.inputFocus)
                }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                required
              />
              <button
                type="submit"
                style={{
                  ...styles.submitButton,
                  ...(isButtonHovered && styles.submitButtonHover)
                }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                Submit
              </button>
            </form>
            <div style={styles.socialContainer}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.socialLink,
                    ...(hoveredSocial === index && styles.socialLinkHover)
                  }}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={styles.copyright}>
          <p style={{ margin: 0 }}>
            Copyright © 2025 Veddio, Built with React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer