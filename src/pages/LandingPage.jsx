import React from 'react'
import { Link } from 'react-router'

function LandingPage() {
  const navigate = () => {
    // Add your navigation logic here
    console.log('Navigating to /home')
  }

  const styles = {
    container: {
      backgroundColor: '#0a0e27',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    heroSection: {
      padding: '80px 20px 60px',
      background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
    },
    contentWrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px'
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      alignItems: 'center'
    },
    colLeft: {
      flex: '1 1 400px',
      minWidth: '300px'
    },
    colRight: {
      flex: '1 1 500px',
      minWidth: '300px',
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: '700',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
      letterSpacing: '-0.02em'
    },
    brandName: {
      color: '#3b82f6',
      fontWeight: '800'
    },
    description: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: '#94a3b8',
      marginBottom: '2rem'
    },
    ctaButton: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      border: 'none',
      padding: '14px 32px',
      fontSize: '1.125rem',
      fontWeight: '600',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
    },
    heroImage: {
      width: '100%',
      maxWidth: '600px',
      height: 'auto',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(59, 130, 246, 0.2)'
    },
    featuresSection: {
      padding: '80px 20px'
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: '700',
      marginBottom: '3rem',
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: '-0.01em'
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    featureCard: {
      backgroundColor: '#1a1f3a',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    },
    featureCardImg: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      backgroundColor: '#0f1629',
      padding: '20px'
    },
    featureCardBody: {
      padding: '1.5rem',
      flex: 1
    },
    featureTitle: {
      fontSize: '1.375rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '0.75rem'
    },
    featureText: {
      color: '#94a3b8',
      fontSize: '0.9375rem',
      lineHeight: '1.6',
      margin: 0
    },
    benefitSection: {
      padding: '80px 20px',
      backgroundColor: '#0f1629'
    },
    benefitRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '60px',
      alignItems: 'center'
    },
    benefitCol: {
      flex: '1 1 450px',
      minWidth: '300px'
    },
    benefitItem: {
      marginBottom: '2.5rem'
    },
    benefitTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#3b82f6',
      marginBottom: '0.5rem',
      marginTop: 0
    },
    benefitSubtitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '1rem',
      marginTop: 0
    },
    benefitText: {
      color: '#94a3b8',
      fontSize: '1rem',
      lineHeight: '1.7',
      margin: 0
    },
    videoWrapper: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      border: '1px solid rgba(59, 130, 246, 0.2)'
    },
    videoIframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none'
    }
  }

  const [hoveredCard, setHoveredCard] = React.useState(null)
  const [buttonHovered, setButtonHovered] = React.useState(false)

  const features = [
    {
      img: "https://media.tenor.com/Ob7Y0A4KFyQAAAA1/setting-icon.webp",
      title: "Managing Videos",
      text: "Effortlessly organize and manage your video library with intuitive controls and smart sorting options."
    },
    {
      img: "https://media.istockphoto.com/id/1178909529/vector/line-icons-editable-stroke-pixel-perfect-for-mobile-and-web-contains-such-icons-as.jpg?s=612x612&w=0&k=20&c=pXI532lzP7XPsGdOm2d6tiUI2WTtuOVhU1JwfVRnZmQ=",
      title: "Categorize Videos",
      text: "Create custom categories and playlists to keep your media organized exactly the way you want."
    },
    {
      img: "https://media.tenor.com/mxYtswglHpsAAAAM/stars-gif.gif",
      title: "Watch History",
      text: "Track your viewing history and easily pick up where you left off with our intelligent playback system."
    }
  ]

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.contentWrapper}>
          <div style={styles.row}>
            <div style={styles.colLeft}>
              <h1 style={styles.title}>
                Welcome to <span style={styles.brandName}>VEDDIO</span>
              </h1>
              <p style={styles.description}>
                Our React Media Player is a lightweight, modern application designed for seamless audio and video playback. Built with React's powerful component-based structure, it allows users to stream and control media with ease.
              </p>

              <Link to={'/home'}>
                            <button 
                onClick={navigate} 
                type="button" 
                style={{
                  ...styles.ctaButton,
                  ...(buttonHovered && {
                    backgroundColor: '#2563eb',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 30px rgba(59, 130, 246, 0.4)'
                  })
                }}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
              >
                Get Started →
              </button>
              </Link>

            </div>

            <div style={styles.colRight}>
              <img
                style={styles.heroImage}
                src="https://cdn.prod.website-files.com/6469e2294ac68c3d5caea372/66c7089ed070c980ebe8fe28_65a2c9f873352e86a39bf7ae_GO.gif"
                alt="VEDDIO Media Player"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <div style={styles.contentWrapper}>
          <h2 style={styles.sectionTitle}>Features</h2>

          <div style={styles.cardGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  ...styles.featureCard,
                  ...(hoveredCard === index && {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                  })
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img 
                  src={feature.img}
                  alt={feature.title}
                  style={styles.featureCardImg}
                />
                <div style={styles.featureCardBody}>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureText}>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div style={styles.benefitSection}>
        <div style={styles.contentWrapper}>
          <div style={styles.benefitRow}>
            <div style={styles.benefitCol}>
              <div style={styles.benefitItem}>
                <h3 style={styles.benefitTitle}>Simple Fast Powerful</h3>
                <h4 style={styles.benefitSubtitle}>Play Everything</h4>
                <p style={styles.benefitText}>
                  A music player is a software application or hardware device that plays audio files. It allows users to play and organize their favorite media seamlessly.
                </p>
              </div>

              <div style={styles.benefitItem}>
                <h3 style={styles.benefitTitle}>Manage History</h3>
                <h4 style={styles.benefitSubtitle}>Track Playback</h4>
                <p style={styles.benefitText}>
                  Users can track what they have watched or listened to, enabling an easy return to favorite content at any time.
                </p>
              </div>

              <div style={styles.benefitItem}>
                <h3 style={styles.benefitTitle}>Categorize Easily</h3>
                <h4 style={styles.benefitSubtitle}>Smart Sorting</h4>
                <p style={styles.benefitText}>
                  Group your music, videos, or podcasts based on genre, artist, or custom categories for a personalized experience.
                </p>
              </div>
            </div>

            <div style={styles.benefitCol}>
              <div style={styles.videoWrapper}>
                <iframe 
                  style={styles.videoIframe}
                  src="https://www.youtube.com/embed/X7hdUmMJmoQ" 
                  title="Demo Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage