import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Mail, 
  Gamepad2, 
  Trophy, 
  Sprout, 
  MapPin, 
  Menu, 
  X, 
  CheckCircle2
} from 'lucide-react';

// Custom Social Media Icons
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const cvData = {
  name: "Vaibhav Bector",
  tagline: "I like football and creativity.",
  location: "Vancouver, BC",
  email: "bector2001@gmail.com",
  github: "https://github.com/B3ECT0R07",
  linkedin: "https://ca.linkedin.com/in/vaibhavbector",
  twitter: "https://x.com/bector2001",
  heroTitles: [
    "Project Manager",
    "Installation Coordinator",
    "Construction Estimator",
    "Supply Chain Manager"
  ],
  bio: "Dynamic operations professional based in Vancouver, BC. Proven track record driving high-impact efficiency improvements, cost reductions, and revenue growth across construction and supply chain operations. Massive Real Madrid fan, passionate gamer, and aspiring entrepreneur with a long-term vision in consultancy and innovative hydroponics.",
  skills: [
    { name: "Project Management", level: 95 },
    { name: "Supply Chain & Operations", level: 90 },
    { name: "Construction Estimating & CPM", level: 88 },
    { name: "Lean & Kaizen Methodologies", level: 85 },
    { name: "SAP & Salesforce", level: 85 },
    { name: "Budget Management & Forecasting", level: 92 },
    { name: "Cross-Functional Leadership", level: 90 }
  ],
  experience: [
    {
      role: "Project Manager / Installation Coordinator",
      company: "TORMAX Canada",
      period: "July 2024 – Present",
      location: "Vancouver, BC",
      highlights: [
        "Boosted operational efficiency by 40% through streamlined installation scheduling.",
        "Increased regional revenue by 30% by developing competitive construction bids.",
        "Implemented Lean & Kaizen frameworks to eliminate workflow bottlenecks.",
        "Utilized Critical Path Method (CPM) to guarantee on-time project completion."
      ]
    },
    {
      role: "Supply Chain Manager",
      company: "Wellness Extract",
      period: "August 2023 – July 2024",
      location: "Vancouver, BC",
      highlights: [
        "Achieved 66% growth in order fulfillment within 12 months.",
        "Reduced overall operational logistics costs by 23%.",
        "Managed multi-channel inventory allocations and vendor partnerships."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Business Administration (BBA)",
      institution: "University of the Fraser Valley (UFV)",
      year: "2023",
      details: "Focused on Supply Chain Management, Operations, and Business Leadership."
    },
    {
      degree: "Diploma in International Business",
      institution: "Universidad del Rosario",
      year: "2023",
      details: "Global market analysis and cross-cultural trade strategies."
    }
  ],
  interests: [
    {
      title: "Football & Real Madrid",
      icon: Trophy,
      desc: "Die-hard Real Madrid supporter. Passionate about tactics, team dynamics, and world football."
    },
    {
      title: "Gaming",
      icon: Gamepad2,
      desc: "Avid gamer. Channeling strategic thinking, tactical agility, and quick decision-making under pressure."
    },
    {
      title: "Entrepreneurship & Hydroponics",
      icon: Sprout,
      desc: "Aspiring consultant & future hydroponics business founder focused on sustainable tech and agriculture."
    }
  ],
  projects: [
    {
      title: "Installation Workflow Optimization",
      category: "Process Engineering",
      desc: "Redesigned site installation workflows, cutting project turnaround times by 40%.",
      metrics: "+40% Efficiency"
    },
    {
      title: "Multi-Channel Supply Chain Scale",
      category: "Supply Chain",
      desc: "Overhauled warehouse logistics to handle 66% increased order volume while slashing costs.",
      metrics: "66% Growth / -23% Cost"
    },
    {
      title: "Estimating & Bidding Engine",
      category: "Construction Management",
      desc: "Built accurate cost estimation structures leading to a 30% increase in contract wins.",
      metrics: "+30% Revenue"
    }
  ]
};

export default function App() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Compute initials dynamically ("Vaibhav Bector" -> "VB")
  const initials = cvData.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  // Typing effect logic
  useEffect(() => {
    const currentFullText = cvData.heroTitles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % cvData.heroTitles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  // Scroll listener for progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          background-color: #0b0f19;
          color: #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          overflow-x: hidden;
        }

        /* Scroll Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
          z-index: 1000;
          transition: width 0.1s ease-out;
        }

        /* Header & Nav */
        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(11, 15, 25, 0.85);
          backdrop-filter: blur(12px);
          z-index: 900;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 1.2rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: #6366f1;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #e2e8f0;
          cursor: pointer;
        }

        /* Hero Section */
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 1.5rem 4rem;
          position: relative;
        }

        .hero-bg-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
        }

        .hero-content {
          max-width: 800px;
          text-align: center;
          z-index: 1;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 50px;
          color: #818cf8;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .typing-container {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: #a855f7;
          min-height: 2.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background-color: #a855f7;
          margin-left: 3px;
          animation: blink 0.8s infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-tagline {
          color: #94a3b8;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #ffffff;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: #e2e8f0;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Section Layout */
        section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 5rem 1.5rem;
        }

        .section-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          color: #64748b;
          font-size: 1rem;
        }

        /* Grid & Cards */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 1.8rem;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(99, 102, 241, 0.4);
        }

        /* Skills Section */
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .skill-item {
          background: rgba(30, 41, 59, 0.3);
          padding: 1rem 1.2rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .skill-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }

        /* Timeline / Experience */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
        }

        .timeline-item {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid rgba(99, 102, 241, 0.3);
        }

        .timeline-dot {
          position: absolute;
          left: -7px;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #6366f1;
          border: 2px solid #0b0f19;
        }

        .timeline-role {
          font-size: 1.2rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .timeline-meta {
          color: #6366f1;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .timeline-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .timeline-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Personal Interests */
        .interest-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .interest-icon {
          width: 45px;
          height: 45px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #818cf8;
        }

        /* Projects Section */
        .project-card {
          cursor: pointer;
        }

        .project-tag {
          font-size: 0.75rem;
          color: #a855f7;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .project-metric {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.3rem 0.6rem;
          background: rgba(168, 85, 247, 0.1);
          color: #c084fc;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1.5rem;
        }

        .modal-content {
          background: #1e293b;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
        }

        /* Footer */
        footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 3rem 1.5rem;
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .social-links a {
          color: #94a3b8;
          transition: color 0.2s ease;
        }

        .social-links a:hover {
          color: #6366f1;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: ${menuOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #0b0f19;
            padding: 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-toggle {
            display: block;
          }
        }
      `}</style>

      {/* Top Scroll Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* Header / Navigation */}
      <header>
        <div className="nav-container">
          <a href="#hero" className="logo">
            {`< ${initials} />`}
          </a>
          <button 
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Highlights</a></li>
            <li><a href="#interests" onClick={() => setMenuOpen(false)}>Interests</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-bg-glow"></div>
        <div className="hero-content">
          <div className="badge">
            <MapPin size={14} /> {cvData.location}
          </div>
          <h1>{cvData.name}</h1>
          <div className="typing-container">
            <span>{displayText}</span>
            <span className="cursor"></span>
          </div>
          <p className="hero-tagline">
            "{cvData.tagline}"
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#experience" className="btn-secondary">View Work</a>
          </div>
        </div>
      </section>

      {/* About Bio Section */}
      <section id="about">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Bridging execution, strategy, and continuous innovation</p>
        </div>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#cbd5e1' }}>
            {cvData.bio}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-header">
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-subtitle">Core expertise across operations, bidding, and optimization</p>
        </div>
        <div className="skills-container">
          {cvData.skills.map((skill, i) => (
            <div key={i} className="skill-item">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span style={{ color: '#a855f7' }}>{skill.level}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Demonstrated record of driving revenue growth and efficiency</p>
        </div>
        <div className="timeline">
          {cvData.experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-meta">{exp.company} | {exp.period} | {exp.location}</p>
              <ul className="timeline-bullets">
                {exp.highlights.map((h, j) => (
                  <li key={j}>
                    <CheckCircle2 size={16} style={{ color: '#6366f1', flexShrink: 0, marginTop: '3px' }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="section-header">
          <h2 className="section-title">Education & Credentials</h2>
        </div>
        <div className="cards-grid">
          {cvData.education.map((edu, i) => (
            <div key={i} className="card">
              <GraduationCap size={28} style={{ color: '#6366f1', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{edu.degree}</h3>
              <p style={{ color: '#a855f7', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{edu.institution} ({edu.year})</p>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects / Key Highlights */}
      <section id="projects">
        <div className="section-header">
          <h2 className="section-title">Key Projects & Deliverables</h2>
          <p className="section-subtitle">Click on any card to view breakdown</p>
        </div>
        <div className="cards-grid">
          {cvData.projects.map((proj, i) => (
            <div 
              key={i} 
              className="card project-card"
              onClick={() => setSelectedProject(proj)}
            >
              <p className="project-tag">{proj.category}</p>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{proj.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>{proj.desc}</p>
              <span className="project-metric">{proj.metrics}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Interests */}
      <section id="interests">
        <div className="section-header">
          <h2 className="section-title">Passions & Interests</h2>
          <p className="section-subtitle">What drives my vision outside the office</p>
        </div>
        <div className="cards-grid">
          {cvData.interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="card interest-card">
                <div className="interest-icon">
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Reach out for opportunities, leadership roles, or collaborations</p>
        </div>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <Mail size={36} style={{ color: '#6366f1', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Email Me</h3>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>{cvData.email}</p>
          <a href={`mailto:${cvData.email}`} className="btn-primary" style={{ display: 'inline-block' }}>
            Send Message
          </a>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>
            <p className="project-tag">{selectedProject.category}</p>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{selectedProject.title}</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>{selectedProject.desc}</p>
            <div className="project-metric">{selectedProject.metrics}</div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href={cvData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
          <a href={cvData.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
          <a href={cvData.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><TwitterIcon size={20} /></a>
        </div>
        <p>© {new Date().getFullYear()} {cvData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}