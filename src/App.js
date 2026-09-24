import React, { useState, useEffect, useRef } from 'react';
import profilePic from './Profile.jpg';

// --- GLITCH CURSOR TRAIL COMPONENT ---
const GlitchTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e) => {
      // Create 2-3 glitch artifacts per mouse movement
      const numParticles = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < numParticles; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          width: Math.random() * 20 + 5, // horizontal bar width
          height: Math.random() * 3 + 1, // thin height for glitch look
          life: 1,
          decay: Math.random() * 0.05 + 0.02, // how fast it fades
          color: Math.random() > 0.5 ? '#5266eb' : '#70707d', // Cobalt or Slate
          shiftX: (Math.random() - 0.5) * 2 // horizontal drift
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Iterate backwards to safely remove dead particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life -= p.decay;
        p.x += p.shiftX; // apply drift

        if (p.life <= 0) {
          particles.current.splice(i, 1);
        } else {
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          
          // Add a subtle glow to the cobalt ones
          if (p.color === '#5266eb') {
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#5266eb';
          } else {
            ctx.shadowBlur = 0;
          }

          // Randomly "snap" the glitch horizontally for a frame
          const glitchSnap = Math.random() > 0.9 ? (Math.random() - 0.5) * 15 : 0;
          ctx.fillRect(p.x + glitchSnap, p.y, p.width, p.height);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none', 
        zIndex: 9999 
      }} 
    />
  );
};

// --- SCROLL REVEAL COMPONENT ---
const Reveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

// --- ACCORDION COMPONENT ---
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.accordionContainer}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={styles.accordionHeader}
      >
        <span style={styles.accordionTitle}>{title}</span>
        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ 
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: '#70707d'
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div 
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div style={styles.accordionContent}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.appContainer}>
      {/* The new glitch cursor effect */}
      <GlitchTrail />

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <span style={styles.logo}>VB</span>
          <div style={styles.navLinks}>
            <a href="https://github.com/B3ECT0R07" target="_blank" rel="noreferrer" style={styles.navLink}>GitHub</a>
            <a href="https://ca.linkedin.com/in/vaibhavbector" target="_blank" rel="noreferrer" style={styles.navLink}>LinkedIn</a>
            <a href="mailto:bector2001@gmail.com" style={styles.primaryButton}>Contact Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <Reveal>
            <div style={styles.imageContainer}>
              <img src={profilePic} alt="Vaibhav Bector" style={styles.profileImg} />
            </div>
          </Reveal>
          <Reveal>
            <h1 style={styles.heroTitle}>
              I build lean operations<br />
              <span style={styles.heroTitleHighlight}>& scalable supply chains.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p style={styles.heroSubtitle}>
              Project Manager & Supply Chain Specialist based in Vancouver, BC. <br/>
              I also like football tactics and creative entrepreneurship.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Main Content Layout */}
      <main style={styles.main}>
        {/* Experience Section */}
        <section style={styles.section}>
          <Reveal>
            <h2 style={styles.sectionTitle}>Experience</h2>
          </Reveal>
          
          <Reveal>
            <div 
              style={{ ...styles.card, transform: hoveredCard === 'tormax' ? 'translateY(-4px)' : 'translateY(0)' }}
              onMouseEnter={() => setHoveredCard('tormax')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.roleTitle}>Project Manager / Installation Coordinator</h3>
                <span style={styles.dateBadge}>July 2024 – Present</span>
              </div>
              <p style={styles.company}>TORMAX Canada | Vancouver, BC</p>
              
              <Accordion title="View Key Outcomes">
                <ul style={styles.list}>
                  <li style={styles.listItem}>Orchestrated a robust lean framework driving a 40% efficiency boost in process management.</li>
                  <li style={styles.listItem}>Led scheduling and cross-functional efforts yielding 30% regional revenue growth.</li>
                  <li style={styles.listItem}>Deployed CPM scheduling to proactively mitigate bottlenecks across operations.</li>
                </ul>
              </Accordion>
            </div>
          </Reveal>

          <Reveal>
            <div 
              style={{ ...styles.card, transform: hoveredCard === 'wellness' ? 'translateY(-4px)' : 'translateY(0)' }}
              onMouseEnter={() => setHoveredCard('wellness')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.roleTitle}>Supply Chain Manager</h3>
                <span style={styles.dateBadge}>August 2023 – July 2024</span>
              </div>
              <p style={styles.company}>Wellness Extract | Vancouver, BC</p>
              
              <Accordion title="View Key Outcomes">
                <ul style={styles.list}>
                  <li style={styles.listItem}>Scaled fulfillment operations by 66% while minimizing downtime.</li>
                  <li style={styles.listItem}>Cut logistics and freight costs by 23% via structured vendor negotiations.</li>
                  <li style={styles.listItem}>Designed a real-time tracking architecture for multi-channel inventory control.</li>
                </ul>
              </Accordion>
            </div>
          </Reveal>
        </section>

        {/* Education & Principles Section */}
        <section style={{...styles.section, ...styles.twoColumn}}>
          <div>
            <Reveal>
              <h2 style={styles.sectionTitle}>Education</h2>
              <div style={styles.card}>
                <h3 style={styles.roleTitle}>Bachelor of Business Administration</h3>
                <p style={styles.company}>University of the Fraser Valley (2023)</p>
                <div style={{height: '24px'}}></div>
                <h3 style={styles.roleTitle}>Diploma in International Business</h3>
                <p style={styles.company}>Universidad del Rosario (2023)</p>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h2 style={styles.sectionTitle}>Core Principles</h2>
              <div style={{...styles.card, ...styles.tagContainer}}>
                {["Lean Operations", "Kaizen Frameworks", "CPM Scheduling", "Logistics Scaling", "Football Tactics", "Hydroponics", "Vertical Farming"].map((tag, i) => (
                  <span key={i} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <Reveal>
          <p style={styles.footerText}>© {new Date().getFullYear()} Vaibhav Bector. Built in Vancouver.</p>
        </Reveal>
      </footer>
    </div>
  );
}

// --- STYLES (Mercury Alpine Banking Design System) ---
const styles = {
  appContainer: {
    backgroundColor: '#171721', // Onyx canvas
    minHeight: '100vh',
    color: '#e2e3ed', // Mist body text
    fontFamily: '"Inter", sans-serif',
    WebkitFontSmoothing: 'antialiased',
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '20px 0',
    backgroundColor: 'rgba(23, 23, 33, 0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #272735',
    zIndex: 100,
  },
  navContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: 700,
    fontSize: '20px',
    color: '#e2e3ed',
    letterSpacing: '-0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  },
  navLink: {
    color: '#70707d', // Slate
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'color 0.2s ease',
  },
  primaryButton: {
    backgroundColor: '#5266eb', // Cobalt Primary
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '40px', // Pill shape
    fontSize: '14px',
    fontWeight: 500,
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    display: 'inline-block',
  },
  hero: {
    padding: '160px 24px 80px 24px',
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heroContent: {
    maxWidth: '800px',
  },
  imageContainer: {
    marginBottom: '32px',
    borderRadius: '50%',
    overflow: 'hidden',
    width: '96px',
    height: '96px',
    border: '2px solid #272735',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heroTitle: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: 'clamp(40px, 6vw, 64px)',
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: '-1px',
    margin: '0 0 24px 0',
    color: '#e2e3ed',
  },
  heroTitleHighlight: {
    color: '#70707d',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#70707d',
    lineHeight: 1.6,
    maxWidth: '600px',
    margin: 0,
  },
  main: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 24px 80px 24px',
  },
  section: {
    marginBottom: '80px',
  },
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  },
  sectionTitle: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '24px',
    fontWeight: 500,
    color: '#e2e3ed',
    marginBottom: '32px',
    paddingBottom: '16px',
    borderBottom: '1px solid #272735',
  },
  card: {
    backgroundColor: '#1e1e2a', // Graphite Elevated
    borderRadius: '12px',
    padding: '32px',
    marginBottom: '24px',
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '8px',
  },
  roleTitle: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '20px',
    fontWeight: 500,
    color: '#e2e3ed',
    margin: 0,
  },
  company: {
    fontSize: '15px',
    color: '#70707d',
    margin: '0 0 24px 0',
  },
  dateBadge: {
    backgroundColor: '#272735', // Obsidian
    color: '#e2e3ed',
    padding: '6px 14px',
    borderRadius: '32px', // Pill
    fontSize: '13px',
    fontWeight: 500,
  },
  accordionContainer: {
    borderTop: '1px solid #272735',
    paddingTop: '8px',
  },
  accordionHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    padding: '16px 0',
    cursor: 'pointer',
    color: '#e2e3ed',
  },
  accordionTitle: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '15px',
    fontWeight: 500,
  },
  accordionContent: {
    paddingBottom: '16px',
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    color: '#70707d',
    lineHeight: 1.6,
  },
  listItem: {
    marginBottom: '12px',
    fontSize: '15px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tag: {
    backgroundColor: '#272735',
    color: '#e2e3ed',
    padding: '8px 16px',
    borderRadius: '32px',
    fontSize: '14px',
    fontWeight: 500,
  },
  footer: {
    textAlign: 'center',
    padding: '40px 24px',
    borderTop: '1px solid #272735',
  },
  footerText: {
    color: '#70707d',
    fontSize: '14px',
    margin: 0,
  },
};