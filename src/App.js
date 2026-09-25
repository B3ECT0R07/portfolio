import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Mail,
  ExternalLink, 
  ChevronDown, 
  Cpu, 
  Globe, 
  TrendingUp, 
  Box, 
  Download,
  Zap,
  Target,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import profilePic from './Profile.jpg';

// --- INLINE SVG BRAND ICONS (FIXES LUCIDE BUILD ISSUES) ---
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ============================================================================
// 1. GLITCH TRAIL CURSOR COMPONENT (FIDDLE DIGITAL INSPIRATION)
// ============================================================================
const GlitchTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const createParticle = (x, y) => {
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: x,
          y: y,
          width: Math.random() * 45 + 12,
          height: Math.random() * 5 + 1,
          color: Math.random() > 0.5 ? '#5266eb' : '#70707d',
          life: 1.0,
          decay: Math.random() * 0.04 + 0.02,
          offset: (Math.random() - 0.5) * 22
        });
      }
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        
        // Horizontal glitch shift artifact
        const glitchX = Math.random() > 0.88 ? (Math.random() - 0.5) * 18 : 0;
        ctx.fillRect(p.x - p.width / 2 + glitchX, p.y + p.offset, p.width, p.height);
        
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.current.splice(i, 1);
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
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
        zIndex: 9999,
        mixBlendMode: 'screen'
      }}
    />
  );
};

// ============================================================================
// 2. PAGE LOADER COMPONENT
// ============================================================================
const PageLoader = ({ isLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 16, 100));
      }, 80);
      return () => clearInterval(timer);
    }
  }, [progress]);

  return (
    <div className={`loader-overlay ${isLoaded ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">VB</div>
        <div className="loader-bar-container">
          <div 
            className="loader-bar" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <div className="loader-text">
          INITIALIZING SYSTEMS... {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. TECH TICKER COMPONENT (SWIPEABLE / DRAGGABLE / AUTO-SCROLL)
// ============================================================================
const TechTicker = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const techStack = [
    "Lean Operations", 
    "Critical Path Method (CPM)", 
    "Kaizen Frameworks", 
    "Supply Chain Logistics", 
    "ERP Systems", 
    "MS Project", 
    "AutoCAD", 
    "Tableau", 
    "PowerBI", 
    "Inventory Analytics", 
    "Fulfillment Scaling", 
    "Vendor Management", 
    "Agile & Scrum"
  ];

  const items = useMemo(() => [
    ...techStack, 
    ...techStack, 
    ...techStack
  ], []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="ticker-wrapper">
      <div className="ticker-label">
        Tech & Methodology Stack
      </div>
      <div 
        className="ticker-container"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="ticker-track">
          {items.map((item, idx) => (
            <div key={idx} className="ticker-item">
              <Zap size={14} className="ticker-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="ticker-hint">
        DRAG OR SWIPE TO EXPLORE STACK
      </div>
    </div>
  );
};

// ============================================================================
// 4. PORTFOLIO DATA STRUCTURES
// ============================================================================
const EXPERIENCES = [
  {
    company: "TORMAX Canada",
    role: "Project Manager / Installation Coordinator",
    period: "July 2024 – Present",
    location: "Vancouver, BC",
    points: [
      "Streamlined installation schedules across Western Canada using Critical Path Method (CPM), improving operational delivery efficiency by 40%.",
      "Managing $1.5M+ in regional commercial installation revenue, driving a 30% expansion in active quarterly project volume.",
      "Applied Lean and Kaizen frameworks to field workflows, reducing technician downtime and site coordination errors.",
      "Coordinated cross-functional teams including site managers, sub-contractors, and architects to ensure full building code compliance."
    ]
  },
  {
    company: "Wellness Extract",
    role: "Supply Chain Manager",
    period: "August 2023 – July 2024",
    location: "Vancouver, BC",
    points: [
      "Engineered multi-channel order fulfillment workflows, resulting in a 66% growth in daily order capacity without adding overhead.",
      "Reduced international freight and 3PL logistics expenditure by 23% through strategic vendor negotiation and route consolidation.",
      "Implemented automated inventory control systems and safety-stock thresholds across three international distribution nodes.",
      "Orchestrated end-to-end supply chain visibility from raw material sourcing to direct-to-consumer delivery."
    ]
  }
];

const PROJECTS = [
  {
    title: "Lean Project Delivery Engine",
    category: "Operations Architecture",
    metric: "40% Efficiency Gain",
    summary: "Built a CPM-driven resource scheduling system for commercial automatic door installations.",
    description: "Architected a custom resource tracking dashboard and Critical Path Method (CPM) workflow engine for TORMAX Canada. The system eliminated resource bottlenecks, streamlined technician dispatch, and boosted overall installation project efficiency by 40%.",
    tech: ["Lean Frameworks", "Kaizen", "MS Project", "CPM Scheduling", "AutoCAD"]
  },
  {
    title: "Global Fulfillment Optimizer",
    category: "Supply Chain Engineering",
    metric: "66% Capacity Expansion",
    summary: "Re-engineered warehouse routing and automated inventory synchronization across 3 fulfillment hubs.",
    description: "Redesigned the entire inventory management infrastructure at Wellness Extract. By integrating automated stock synchronization algorithms and optimizing warehouse pick-and-pack routing, daily order fulfillment volume scaled by 66% while cutting freight costs by 23%.",
    tech: ["ERP Systems", "Inventory Analytics", "Tableau", "3PL Management", "Logistics"]
  }
];

const KPIS = [
  { 
    label: "Efficiency Boost", 
    value: "40%", 
    icon: <Zap size={26} />,
    description: "Operational throughput improvement via Lean & Kaizen frameworks."
  },
  { 
    label: "Fulfillment Growth", 
    value: "66%", 
    icon: <TrendingUp size={26} />,
    description: "Expansion in daily order capacity through warehouse automation."
  },
  { 
    label: "Logistics Savings", 
    value: "23%", 
    icon: <BarChart3 size={26} />,
    description: "Direct logistics cost reduction from route & 3PL optimizations."
  },
  { 
    label: "Revenue Expansion", 
    value: "30%", 
    icon: <Target size={26} />,
    description: "Regional commercial project volume growth managed directly."
  }
];

const PASSIONS = [
  { 
    title: "Real Madrid & Football Tactics", 
    desc: "Analyzing space creation, transition fluidities, press-resistant buildup, and squad optimization techniques in elite sports. Applying tactical versatility from the pitch directly to high-pressure business operational strategy.",
    icon: <Globe />
  },
  { 
    title: "Hydroponics / Vertical Farming", 
    desc: "Exploring precision agriculture, closed-loop nutrient delivery systems, and controlled environment agriculture (CEA). Translating supply chain engineering to sustainable urban food systems and local supply resilience.",
    icon: <Box />
  },
  { 
    title: "Lean Entrepreneurship", 
    desc: "Architecting minimalist operating models based on continuous build-measure-learn loops. Systematic elimination of operational waste (Muda) to maximize enterprise value creation per capital unit spent.",
    icon: <Cpu />
  }
];

const EDUCATION = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "University of the Fraser Valley",
    year: "Class of 2023",
    location: "Abbotsford, BC",
    details: "Focus on Strategic Management, Operations, and Business Analytics."
  },
  {
    degree: "Diploma in International Business",
    institution: "Universidad del Rosario",
    year: "2023",
    location: "Bogotá, Colombia",
    details: "Global supply chains, cross-border trade mechanics, and international market strategy."
  }
];

// ============================================================================
// 5. MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Page load delay simulation / video buffer sync
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="portfolio-root">
      {/* Interactive Glitch Trail Cursor Canvas */}
      <GlitchTrail />

      {/* Page Loading Screen */}
      <PageLoader isLoaded={isLoaded} />

      {/* FIXED FULL-VIEWPORT VIDEO BACKGROUND (NO PARALLAX TO PREVENT BLANK TOPS) */}
      <div className="page-video-bg">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="page-video"
        >
          <source src="/meditating-ninja-4k.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      {/* NAVIGATION BAR */}
      <nav className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-content">
          <a href="#" className="nav-logo">VB</a>
          <div className="nav-links">
            <a href="#impact">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#principles">Principles</a>
            <a href="#education">Education</a>
            <a href="mailto:bector2001@gmail.com" className="nav-cta">
              <Mail size={14} style={{ marginRight: '6px' }} />
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-text-block">
            <div className="hero-badge">
              VANCOUVER, BC • SUPPLY CHAIN & OPERATIONS
            </div>
            <h1 className="hero-title">
              Vaibhav <span className="text-accent">Bector</span>
            </h1>
            <p className="hero-subtitle">
              Building lean operations and scalable supply chains through data, Kaizen frameworks, and creative tactics.
            </p>
            <div className="hero-actions">
              <a href="mailto:bector2001@gmail.com" className="btn-primary">
                Get in Touch
              </a>
              <a 
                href="/Vaibhav_Bector_Resume.pdf" 
                download 
                className="btn-secondary"
              >
                <Download size={18} style={{ marginRight: '8px' }} />
                Download CV
              </a>
              <div className="hero-socials">
                <a 
                  href="https://github.com/B3ECT0R07" 
                  target="_blank" 
                  rel="noreferrer"
                  title="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
                <a 
                  href="https://ca.linkedin.com/in/vaibhavbector" 
                  target="_blank" 
                  rel="noreferrer"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image-block">
            <div className="portrait-container">
              <img 
                src={profilePic} 
                alt="Vaibhav Bector" 
                className="portrait-img" 
              />
              <div className="portrait-frame" />
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <ChevronDown className="bounce" size={28} />
        </div>
      </section>

      {/* TECH & METHODOLOGY TICKER */}
      <TechTicker />

      {/* STRATEGIC IMPACT DASHBOARD */}
      <section className="section-padding" id="impact">
        <div className="content-container">
          <div className="section-header-block">
            <span className="section-kicker">Quantifiable Track Record</span>
            <h2 className="section-title">Strategic Impact</h2>
          </div>
          <div className="kpi-grid">
            {KPIS.map((kpi, idx) => (
              <div key={idx} className="kpi-card">
                <div className="kpi-icon-wrapper">
                  {kpi.icon}
                </div>
                <div className="kpi-value">
                  {kpi.value}
                </div>
                <div className="kpi-label">
                  {kpi.label}
                </div>
                <div className="kpi-desc">
                  {kpi.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section className="section-padding" id="experience">
        <div className="content-container">
          <div className="section-header-block">
            <span className="section-kicker">Career Path</span>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="exp-list">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">
                      {exp.company} <span className="exp-divider">•</span> {exp.location}
                    </p>
                  </div>
                  <span className="exp-period-badge">{exp.period}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECT PROJECTS SECTION */}
      <section className="section-padding" id="projects">
        <div className="content-container">
          <div className="section-header-block">
            <span className="section-kicker">Case Studies</span>
            <h2 className="section-title">Select Projects</h2>
            <p className="section-tagline">
              Systems and architectures engineered for scale and waste reduction.
            </p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-cat">{project.category}</div>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-stat">{project.metric}</div>
                <div className="project-link">
                  View Full Case Study <ExternalLink size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVING PRINCIPLES ACCORDIONS */}
      <section className="section-padding" id="principles">
        <div className="content-container">
          <div className="section-header-block">
            <span className="section-kicker">Mindset & Method</span>
            <h2 className="section-title">Driving Principles</h2>
          </div>
          <div className="accordion-container">
            {PASSIONS.map((item, idx) => (
              <div 
                key={idx} 
                className={`accordion-item ${activeAccordion === idx ? 'active' : ''}`}
                onClick={() => setActiveAccordion(idx)}
              >
                <div className="accordion-header">
                  <div className="accordion-title-group">
                    <span className="accordion-icon">{item.icon}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <ChevronDown className="accordion-arrow" />
                </div>
                {activeAccordion === idx && (
                  <div className="accordion-content">
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="section-padding" id="education">
        <div className="content-container">
          <div className="section-header-block">
            <span className="section-kicker">Academic Background</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="edu-grid">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-header">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <p className="edu-institution">
                  {edu.institution} • {edu.location}
                </p>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="content-container">
          <div className="footer-flex">
            <div>
              <p className="footer-brand">VAIBHAV BECTOR</p>
              <p className="footer-sub">Lean Operations & Supply Chain Engineering</p>
            </div>
            <div className="footer-links">
              <a href="https://github.com/B3ECT0R07" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://ca.linkedin.com/in/vaibhavbector" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:bector2001@gmail.com">
                Email
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Vaibhav Bector. All rights reserved.</p>
            <p>Styled with Mercury Alpine Design System</p>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE PROJECT MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="project-cat">{selectedProject.category}</div>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <div className="modal-metric-badge">{selectedProject.metric}</div>
            <p className="modal-desc">{selectedProject.description}</p>
            
            <div className="modal-tech-header">Tools & Methodologies Applied:</div>
            <div className="modal-tech-list">
              {selectedProject.tech.map((t) => (
                <span key={t} className="tech-tag">
                  <CheckCircle2 size={12} style={{ marginRight: '6px', color: '#5266eb' }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 6. MERCURY ALPINE DESIGN SYSTEM STYLESHEET                          */}
      {/* ==================================================================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        :root {
          --onyx: #171721;
          --graphite: #1e1e2a;
          --obsidian: #272735;
          --cobalt: #5266eb;
          --slate: #70707d;
          --mist: #e2e3ed;
          --white: #ffffff;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: var(--onyx);
          color: var(--white);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4, .nav-logo, .loader-logo, .kpi-value {
          font-family: 'Space Grotesk', sans-serif;
        }

        .portfolio-root {
          position: relative;
          width: 100%;
        }

        /* ------------------------------------------------------------------ */
        /* FIXED VIDEO BACKGROUND SYSTEM                                       */
        /* ------------------------------------------------------------------ */
        .page-video-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .page-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: none !important;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center, 
            rgba(23, 23, 33, 0.35) 0%, 
            rgba(23, 23, 33, 0.92) 100%
          );
        }

        /* ------------------------------------------------------------------ */
        /* PAGE LOADER                                                        */
        /* ------------------------------------------------------------------ */
        .loader-overlay {
          position: fixed;
          inset: 0;
          background: var(--onyx);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s ease, visibility 0.8s;
        }

        .loader-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .loader-content {
          text-align: center;
          width: 280px;
        }

        .loader-logo {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--cobalt);
          letter-spacing: -2px;
        }

        .loader-bar-container {
          height: 2px;
          width: 100%;
          background: var(--obsidian);
          margin-bottom: 1.25rem;
          overflow: hidden;
          border-radius: 2px;
        }

        .loader-bar {
          height: 100%;
          background: var(--cobalt);
          transition: width 0.2s ease-out;
        }

        .loader-text {
          font-size: 0.7rem;
          letter-spacing: 0.25rem;
          color: var(--slate);
          font-weight: 600;
        }

        /* ------------------------------------------------------------------ */
        /* NAVIGATION BAR                                                     */
        /* ------------------------------------------------------------------ */
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 1.75rem 0;
        }

        .nav-scrolled {
          background: rgba(23, 23, 33, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--obsidian);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -1px;
          color: var(--white);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2.25rem;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--slate);
          font-size: 0.88rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: var(--white);
        }

        .nav-cta {
          padding: 0.6rem 1.25rem;
          background: var(--obsidian);
          color: var(--white) !important;
          border-radius: 40px;
          display: flex;
          align-items: center;
          transition: background 0.3s ease;
        }

        .nav-cta:hover {
          background: var(--graphite);
        }

        /* ------------------------------------------------------------------ */
        /* HERO SECTION                                                       */
        /* ------------------------------------------------------------------ */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          padding: 0 2rem;
          max-width: 1200px;
          margin: 0 auto;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--obsidian);
          border-radius: 40px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 1.75rem;
          color: var(--slate);
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 5.25rem;
          line-height: 0.95;
          margin-bottom: 2rem;
          letter-spacing: -2px;
        }

        .text-accent {
          color: var(--cobalt);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--slate);
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 520px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--cobalt);
          color: var(--white);
          text-decoration: none;
          padding: 0.95rem 2rem;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: transform 0.3s, box-shadow 0.3s;
          display: inline-flex;
          align-items: center;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(82, 102, 235, 0.35);
        }

        .btn-secondary {
          background: var(--obsidian);
          color: var(--white);
          text-decoration: none;
          padding: 0.95rem 2rem;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          transition: background 0.3s, transform 0.3s;
        }

        .btn-secondary:hover {
          background: var(--graphite);
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          gap: 1.25rem;
          margin-left: 0.5rem;
        }

        .hero-socials a {
          color: var(--slate);
          transition: color 0.3s;
          display: flex;
          align-items: center;
        }

        .hero-socials a:hover {
          color: var(--white);
        }

        .portrait-container {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 1;
          margin: 0 auto;
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          position: relative;
          z-index: 2;
          filter: grayscale(10%);
        }

        .portrait-frame {
          position: absolute;
          inset: 18px -18px -18px 18px;
          border: 2px solid var(--cobalt);
          border-radius: 12px;
          z-index: 1;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--slate);
        }

        /* ------------------------------------------------------------------ */
        /* TECH TICKER                                                        */
        /* ------------------------------------------------------------------ */
        .ticker-wrapper {
          background: var(--graphite);
          padding: 2.25rem 0;
          border-top: 1px solid var(--obsidian);
          border-bottom: 1px solid var(--obsidian);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .ticker-label {
          text-align: center;
          font-size: 0.7rem;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .ticker-container {
          overflow: hidden;
          cursor: grab;
          user-select: none;
        }

        .ticker-container:active {
          cursor: grabbing;
        }

        .ticker-track {
          display: flex;
          gap: 3.5rem;
          width: max-content;
          animation: scroll 38s linear infinite;
        }

        .ticker-container:hover .ticker-track {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          color: var(--mist);
          white-space: nowrap;
          font-weight: 500;
        }

        .ticker-icon {
          color: var(--cobalt);
        }

        .ticker-hint {
          text-align: center;
          font-size: 0.65rem;
          color: var(--slate);
          margin-top: 1.25rem;
          letter-spacing: 1.5px;
          opacity: 0.6;
          font-weight: 600;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        /* ------------------------------------------------------------------ */
        /* SECTION HEADERS & UTILITIES                                        */
        /* ------------------------------------------------------------------ */
        .section-padding {
          padding: 8.5rem 2rem;
          position: relative;
          z-index: 1;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header-block {
          margin-bottom: 4rem;
        }

        .section-kicker {
          display: inline-block;
          font-size: 0.75rem;
          color: var(--cobalt);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-size: 3.25rem;
          letter-spacing: -1px;
        }

        .section-tagline {
          color: var(--slate);
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }

        /* ------------------------------------------------------------------ */
        /* STRATEGIC IMPACT DASHBOARD (KPIs)                                  */
        /* ------------------------------------------------------------------ */
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.75rem;
        }

        .kpi-card {
          background: var(--graphite);
          padding: 2.75rem 2rem;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .kpi-card:hover {
          transform: translateY(-6px);
        }

        .kpi-icon-wrapper {
          color: var(--cobalt);
          margin-bottom: 1.25rem;
          display: flex;
          justify-content: center;
        }

        .kpi-value {
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .kpi-label {
          color: var(--white);
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .kpi-desc {
          color: var(--slate);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        /* ------------------------------------------------------------------ */
        /* EXPERIENCE SECTION                                                 */
        /* ------------------------------------------------------------------ */
        .exp-list {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .exp-card {
          background: var(--graphite);
          padding: 3.25rem;
          border-radius: 12px;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .exp-role {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .exp-company {
          color: var(--cobalt);
          font-weight: 600;
          font-size: 1.05rem;
        }

        .exp-divider {
          color: var(--slate);
          margin: 0 0.4rem;
        }

        .exp-period-badge {
          background: var(--obsidian);
          padding: 0.5rem 1rem;
          border-radius: 40px;
          color: var(--slate);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .exp-points {
          list-style: none;
        }

        .exp-points li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 1.1rem;
          color: var(--mist);
          line-height: 1.65;
          font-size: 1rem;
        }

        .exp-points li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 6px;
          height: 6px;
          background: var(--cobalt);
          border-radius: 50%;
        }

        /* ------------------------------------------------------------------ */
        /* PROJECTS SECTION                                                   */
        /* ------------------------------------------------------------------ */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.25rem;
        }

        .project-card {
          background: var(--graphite);
          padding: 3.25rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          border-color: var(--cobalt);
          transform: translateY(-5px);
        }

        .project-cat {
          font-size: 0.72rem;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .project-name {
          font-size: 2.1rem;
          margin-bottom: 1rem;
        }

        .project-summary {
          color: var(--slate);
          font-size: 0.98rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .project-stat {
          font-size: 1.35rem;
          color: var(--cobalt);
          font-weight: 700;
          margin-bottom: 2rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--white);
        }

        /* ------------------------------------------------------------------ */
        /* PRINCIPLES ACCORDION                                               */
        /* ------------------------------------------------------------------ */
        .accordion-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .accordion-item {
          background: var(--graphite);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: background 0.3s;
        }

        .accordion-header {
          padding: 2.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .accordion-title-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .accordion-icon {
          color: var(--cobalt);
          display: flex;
        }

        .accordion-arrow {
          transition: transform 0.3s ease;
          color: var(--slate);
        }

        .accordion-item.active .accordion-arrow {
          transform: rotate(180deg);
        }

        .accordion-content {
          padding: 0 2.25rem 2.25rem 5rem;
          color: var(--slate);
          line-height: 1.7;
          font-size: 1.02rem;
        }

        /* ------------------------------------------------------------------ */
        /* EDUCATION SECTION                                                  */
        /* ------------------------------------------------------------------ */
        .edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.25rem;
        }

        .edu-card {
          background: var(--graphite);
          padding: 3rem;
          border-radius: 12px;
        }

        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .edu-degree {
          font-size: 1.4rem;
          line-height: 1.3;
        }

        .edu-year {
          background: var(--obsidian);
          padding: 0.4rem 0.9rem;
          border-radius: 40px;
          color: var(--slate);
          font-size: 0.8rem;
          white-space: nowrap;
        }

        .edu-institution {
          color: var(--cobalt);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .edu-details {
          color: var(--slate);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* ------------------------------------------------------------------ */
        /* MODAL OVERLAY                                                      */
        /* ------------------------------------------------------------------ */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 15, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-card {
          background: var(--graphite);
          padding: 4rem;
          border-radius: 20px;
          max-width: 680px;
          width: 100%;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .modal-close {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: var(--obsidian);
          border: none;
          color: var(--slate);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s;
        }

        .modal-close:hover {
          color: var(--white);
        }

        .modal-title {
          font-size: 2.5rem;
          margin-bottom: 1.25rem;
        }

        .modal-metric-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: var(--cobalt);
          border-radius: 40px;
          margin-bottom: 2rem;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .modal-desc {
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--mist);
          margin-bottom: 2.5rem;
        }

        .modal-tech-header {
          font-size: 0.8rem;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .modal-tech-list {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .tech-tag {
          padding: 0.5rem 1.1rem;
          background: var(--obsidian);
          border-radius: 40px;
          font-size: 0.85rem;
          color: var(--white);
          display: flex;
          align-items: center;
        }

        /* ------------------------------------------------------------------ */
        /* FOOTER                                                             */
        /* ------------------------------------------------------------------ */
        .footer {
          padding: 5rem 2rem 3rem;
          border-top: 1px solid var(--obsidian);
          background: var(--onyx);
          position: relative;
          z-index: 1;
        }

        .footer-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-brand {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -1px;
          margin-bottom: 0.5rem;
        }

        .footer-sub {
          color: var(--slate);
          font-size: 0.95rem;
        }

        .footer-links {
          display: flex;
          gap: 2.25rem;
        }

        .footer-links a {
          color: var(--slate);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--white);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          color: var(--slate);
          font-size: 0.85rem;
          border-top: 1px solid var(--obsidian);
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* ------------------------------------------------------------------ */
        /* RESPONSIVE LAYOUT ADJUSTMENTS                                      */
        /* ------------------------------------------------------------------ */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-text-block {
            order: 2;
          }

          .hero-image-block {
            order: 1;
          }

          .hero-title {
            font-size: 3.8rem;
          }

          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-socials {
            margin-left: 0;
          }

          .projects-grid, 
          .edu-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .modal-card {
            padding: 2.5rem 2rem;
          }

          .exp-card, 
          .project-card, 
          .edu-card {
            padding: 2rem;
          }
        }

        .bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
}