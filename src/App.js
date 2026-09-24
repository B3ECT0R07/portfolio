import React, { useState, useEffect, useRef } from 'react';
import profilePic from './Profile.jpg';

// --- 1. GLITCH CURSOR TRAIL ---
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
      const numParticles = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < numParticles; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          width: Math.random() * 20 + 5,
          height: Math.random() * 3 + 1,
          life: 1,
          decay: Math.random() * 0.05 + 0.02,
          color: Math.random() > 0.5 ? '#5266eb' : '#70707d',
          shiftX: (Math.random() - 0.5) * 2
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life -= p.decay;
        p.x += p.shiftX; 

        if (p.life <= 0) {
          particles.current.splice(i, 1);
        } else {
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          
          if (p.color === '#5266eb') {
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#5266eb';
          } else {
            ctx.shadowBlur = 0;
          }

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

// --- 2. SCROLL REVEAL (WITH STAGGER) ---
const Reveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

// --- 3. SMOOTH ACCORDION ---
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

// --- 4. PROJECT MODAL ---
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalCard} onClick={e => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>{title}</h3>
          <button onClick={onClose} style={styles.closeBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div style={styles.modalBody}>
          {content}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const projectsData = {
    leanOps: {
      title: "Lean Framework Integration",
      content: (
        <>
          <p style={styles.modalText}>At TORMAX Canada, I orchestrated a robust lean framework specifically aimed at mitigating operational bottlenecks.</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Achieved a 40% efficiency boost in process management.</li>
            <li style={styles.listItem}>Utilized CPM scheduling to forecast and remove delays.</li>
            <li style={styles.listItem}>Drove a 30% regional revenue growth through streamlined scheduling.</li>
          </ul>
        </>
      )
    },
    supplyChain: {
      title: "Logistics & Fulfillment Scaling",
      content: (
        <>
          <p style={styles.modalText}>At Wellness Extract, the challenge was to handle rapid growth without bloating operational costs.</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Scaled fulfillment operations by 66% while minimizing system downtime.</li>
            <li style={styles.listItem}>Cut overall logistics and freight costs by 23% via vendor negotiations.</li>
            <li style={styles.listItem}>Designed and deployed a real-time multi-channel tracking architecture.</li>
          </ul>
        </>
      )
    }
  };

  return (
    <div style={styles.appContainer}>
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
          <Reveal delay={0}>
            <div style={styles.imageContainer}>
              <img src={profilePic} alt="Vaibhav Bector" style={styles.profileImg} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 style={styles.heroTitle}>
              I build lean operations<br />
              <span style={styles.heroTitleHighlight}>& scalable supply chains.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p style={styles.heroSubtitle}>
              Project Manager & Supply Chain Specialist based in Vancouver, BC. <br/>
              I also like football tactics and creative entrepreneurship.
            </p>
          </Reveal>
        </div>
      </header>

      <main style={styles.main}>
        {/* Experience Section */}
        <section style={styles.section}>
          <Reveal>
            <h2 style={styles.sectionTitle}>Experience</h2>
          </Reveal>
          
          <Reveal delay={100}>
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

          <Reveal delay={200}>
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

        {/* Highlighted Projects / Modals Section */}
        <section style={styles.section}>
          <Reveal>
            <h2 style={styles.sectionTitle}>Key Initiatives</h2>
          </Reveal>
          <div style={styles.twoColumn}>
            <Reveal delay={100}>
              <div 
                style={{ ...styles.card, cursor: 'pointer', height: '100%', transform: hoveredCard === 'proj1' ? 'translateY(-4px)' : 'translateY(0)' }}
                onMouseEnter={() => setHoveredCard('proj1')}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveModal('leanOps')}
              >
                <h3 style={styles.roleTitle}>Lean Ops Framework</h3>
                <p style={styles.company}>Process Optimization & CPM</p>
                <span style={styles.textButton}>Read Case Study →</span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div 
                style={{ ...styles.card, cursor: 'pointer', height: '100%', transform: hoveredCard === 'proj2' ? 'translateY(-4px)' : 'translateY(0)' }}
                onMouseEnter={() => setHoveredCard('proj2')}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveModal('supplyChain')}
              >
                <h3 style={styles.roleTitle}>Fulfillment Scaling</h3>
                <p style={styles.company}>Cost Reduction & Tracking</p>
                <span style={styles.textButton}>Read Case Study →</span>
              </div>
            </Reveal>
          </div>
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
            <Reveal delay={100}>
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

      {/* Render Active Modal */}
      {activeModal && (
        <Modal 
          isOpen={true} 
          onClose={() => setActiveModal(null)}
          title={projectsData[activeModal].title}
          content={projectsData[activeModal].content}
        />
      )}
    </div>
  );
}

// --- 5. STYLES (Mercury Alpine Banking Design System) ---
const styles = {
  appContainer: {
    backgroundColor: '#171721', 
    minHeight: '100vh',
    color: '#e2e3ed', 
    fontFamily: '"Inter", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    position: 'relative',
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
    color: '#70707d',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'color 0.2s ease',
  },
  primaryButton: {
    backgroundColor: '#5266eb',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '40px',
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
    backgroundColor: '#1e1e2a', 
    borderRadius: '12px',
    padding: '32px',
    marginBottom: '24px',
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    boxSizing: 'border-box',
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
    backgroundColor: '#272735', 
    color: '#e2e3ed',
    padding: '6px 14px',
    borderRadius: '32px', 
    fontSize: '13px',
    fontWeight: 500,
  },
  textButton: {
    color: '#5266eb',
    fontSize: '14px',
    fontWeight: 500,
    marginTop: 'auto',
    display: 'inline-block',
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
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(23, 23, 33, 0.95)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '24px',
    boxSizing: 'border-box',
    backdropFilter: 'blur(8px)',
  },
  modalCard: {
    backgroundColor: '#1e1e2a',
    borderRadius: '12px',
    padding: '32px',
    width: '100%',
    maxWidth: '600px',
    border: '1px solid #272735',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid #272735',
  },
  modalTitle: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '24px',
    fontWeight: 500,
    color: '#e2e3ed',
    margin: 0,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#70707d',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
  },
  modalBody: {
    color: '#70707d',
    lineHeight: 1.6,
  },
  modalText: {
    marginBottom: '20px',
    fontSize: '15px',
  }
};