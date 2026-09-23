import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, X, ChevronDown, Sparkles, ExternalLink } from 'lucide-react';

// Custom Social Icons
const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function App() {
  const [typedRole, setTypedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPassion, setSelectedPassion] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const videoRef = useRef(null);

  const initials = "VB";

  const roles = [
    "Project Manager",
    "Installation Coordinator",
    "Construction Estimator",
    "Supply Chain Manager"
  ];

  const personalInfo = {
    name: "Vaibhav Bector",
    location: "Vancouver, BC",
    email: "bector2001@gmail.com",
    tagline: "I like football and creativity.",
    github: "https://github.com/B3ECT0R07",
    linkedin: "https://ca.linkedin.com/in/vaibhavbector",
    twitter: "https://x.com/bector2001"
  };

  const passions = [
    {
      id: "football",
      title: "Football & Real Madrid",
      icon: "⚽",
      tagline: "Hala Madrid y nada más",
      shortDesc: "Passionate about strategy, team dynamics, and world-class performance both on and off the pitch.",
      fullContent: `Football is more than just a game to me—it's a masterclass in strategy, leadership, and high-pressure execution. As an avid supporter of Real Madrid, I draw daily inspiration from their mindset: constant improvement, clutch performance under pressure, and unyielding ambition. Whether managing project timelines or analyzing tactical formations, the drive for excellence remains identical.`
    },
    {
      id: "hydroponics",
      title: "Overgrown Nature & Hydroponics",
      icon: "🌿",
      tagline: "Sustainable growth & vertical farming",
      shortDesc: "Blending tech and nature through sustainable hydroponics and ecological innovation.",
      fullContent: `Inspired by overgrown natural aesthetic train ecosystems and modern clean tech, my interest in hydroponics focuses on automated urban farming, nutrient delivery systems, and zero-soil growth. It represents the ultimate intersection of biological science, engineering, and environmental stewardship.`
    },
    {
      id: "gaming",
      title: "Gaming & Interactive Design",
      icon: "🎮",
      tagline: "Immersive narrative & high-stakes strategy",
      shortDesc: "Exploring dynamic UI/UX, complex system loops, and open-world storytelling.",
      fullContent: `From high-level competitive simulation to massive open-world dynamic games like GTA VI, gaming inspires how I view workflow optimization and digital experience design. Complex games demand fluid feedback, quick decision-making, and intuitive UX—principles I bring directly into operational and project leadership.`
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship & Consulting",
      icon: "💡",
      tagline: "Turning ideas into scalable systems",
      shortDesc: "Building lean operations, optimizing logistics, and solving hard business problems.",
      fullContent: `My operational background in supply chain optimization (achieving 66% fulfillment growth) and project management (boosting regional efficiency by 40%) stems from a core entrepreneurial mindset. I enjoy breaking down chaotic operational bottlenecks into streamlined, repeatable processes.`
    }
  ];

  const experiences = [
    {
      company: "TORMAX Canada",
      role: "Project Manager / Installation Coordinator",
      period: "July 2024 – Present",
      location: "Vancouver, BC",
      highlights: [
        "Boosted operational project efficiency by 40% utilizing Lean and Kaizen frameworks.",
        "Drove 30% regional revenue growth through precise resource allocation and client relations.",
        "Spearheaded CPM scheduling for commercial entrance architecture projects."
      ]
    },
    {
      company: "Wellness Extract",
      role: "Supply Chain Manager",
      period: "August 2023 – July 2024",
      location: "Vancouver, BC",
      highlights: [
        "Scaled order fulfillment by 66% through automated logistics and multi-channel inventory.",
        "Reduced logistics operational costs by 23% by renegotiating freight terms and vendor contracts.",
        "Managed end-to-end supply chain pipelines across North American fulfillment hubs."
      ]
    }
  ];

  const projects = [
    {
      id: "tormax-tracker",
      title: "Lean Project Delivery Engine",
      category: "Operations & Project Management",
      desc: "Developed streamlined installation and resource planning matrices that cut project delays by 40%.",
      details: "By combining Critical Path Method (CPM) scheduling with agile status tracking, this system improved installation flow, aligned field technicians with logistics hubs, and drove 30% regional growth."
    },
    {
      id: "supply-chain-hub",
      title: "Multi-Channel Fulfillment Optimizer",
      category: "Supply Chain & Logistics",
      desc: "Architected end-to-end inventory management workflows driving 66% order volume increase.",
      details: "Leveraged data analytics to optimize stock levels, prevent stockouts, and reduce freight costs by 23% across direct-to-consumer and retail distribution channels."
    }
  ];

  // Typing effect logic
  useEffect(() => {
    const current = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedRole(current.substring(0, typedRole.length + 1));
        if (typedRole === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedRole(current.substring(0, typedRole.length - 1));
        if (typedRole === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <div className="portfolio-app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&family=Cinzel:wght@600;800&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body, html {
          background-color: #0b130e;
          color: #e2ebd8;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        /* Live Video Background */
        .bg-live {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -2;
          overflow: hidden;
        }

        .bg-live video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4) contrast(1.15) saturate(1.1);
        }

        .bg-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(circle at center, rgba(11, 19, 14, 0.4) 0%, rgba(7, 12, 9, 0.92) 100%),
                      linear-gradient(to bottom, rgba(11, 19, 14, 0.6), rgba(11, 19, 14, 0.85));
          z-index: -1;
          pointer-events: none;
        }

        /* Navigation Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(14, 24, 18, 0.65);
          border-bottom: 1px solid rgba(138, 171, 123, 0.15);
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #d4af37, #a8c99c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .nav-link {
          color: #a8c99c;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: #d4af37;
        }

        /* Container Layout */
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 6rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(45, 74, 50, 0.4);
          border: 1px solid rgba(168, 201, 156, 0.3);
          border-radius: 999px;
          color: #a8c99c;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .hero-title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }

        .hero-title span {
          background: linear-gradient(135deg, #ffffff, #a8c99c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .typing-container {
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          color: #d4af37;
          font-weight: 700;
          min-height: 3rem;
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 1.8rem;
          background-color: #d4af37;
          margin-left: 6px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: #9ab392;
          max-width: 650px;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .social-bar {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(168, 201, 156, 0.2);
          color: #d4e7c5;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-btn:hover {
          background: rgba(168, 201, 156, 0.2);
          border-color: #d4af37;
          color: #d4af37;
          transform: translateY(-3px);
        }

        /* Glass Cards */
        .glass-card {
          background: rgba(18, 30, 22, 0.55);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(168, 201, 156, 0.18);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        /* Section Titles */
        .section-header {
          margin-bottom: 3rem;
        }

        .section-tag {
          color: #d4af37;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
        }

        /* Passions Grid (Apple Style) */
        .passions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .passion-tile {
          cursor: pointer;
          position: relative;
          overflow: hidden;
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
        }

        .passion-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .passion-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .passion-tagline {
          font-size: 0.85rem;
          color: #a8c99c;
        }

        /* Experience Section */
        .exp-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-company {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
        }

        .exp-role {
          color: #d4af37;
          font-weight: 600;
          font-size: 1rem;
        }

        .exp-meta {
          color: #8aab7b;
          font-size: 0.85rem;
          text-align: right;
        }

        .exp-list {
          list-style: none;
          padding: 0;
        }

        .exp-list li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.6rem;
          color: #c3d6b8;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .exp-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: #a8c99c;
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .project-card {
          cursor: pointer;
        }

        .project-cat {
          font-size: 0.8rem;
          color: #d4af37;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.8rem;
        }

        .project-desc {
          color: #9ab392;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Modal Backdrop */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(5, 10, 7, 0.85);
          backdrop-filter: blur(10px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          background: #121e16;
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 24px;
          max-width: 550px;
          width: 100%;
          padding: 2.5rem;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #e2ebd8;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: rgba(212, 175, 55, 0.2);
          color: #d4af37;
        }

        /* Footer */
        .footer {
          border-top: 1px solid rgba(168, 201, 156, 0.15);
          padding: 3rem 0;
          text-align: center;
          color: #79966b;
          font-size: 0.9rem;
        }

        @media (max-width: 640px) {
          .exp-header {
            flex-direction: column;
          }
          .exp-meta {
            text-align: left;
          }
        }
      `}</style>

      {/* Video Background */}
      <div className="bg-live" aria-hidden="true">
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src="/train.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo">{`< ${initials} />`}</div>
        <nav className="nav-links">
          <a href="#passions" className="nav-link">Passions</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-badge">
            <Sparkles size={14} /> Available for Operations & PM Roles
          </div>

          <h1 className="hero-title">
            Hi, I'm <span>{personalInfo.name}</span>
          </h1>

          <div className="typing-container">
            <span>{typedRole}</span>
            <span className="cursor"></span>
          </div>

          <p className="hero-subtitle">
            Based in {personalInfo.location}. {personalInfo.tagline} Driving operational efficiency,
            lean project execution, and strategic revenue growth through creative coordination.
          </p>

          <div className="social-bar">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-btn" aria-label="Email">
              <Mail size={20} />
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#8aab7b', fontSize: '0.9rem', marginLeft: '0.5rem' }}>
              <MapPin size={16} /> {personalInfo.location}
            </span>
          </div>
        </section>

        {/* Passions Section */}
        <section id="passions" style={{ padding: '4rem 0' }}>
          <div className="section-header">
            <div className="section-tag"><Sparkles size={14} /> Core Interests</div>
            <h2 className="section-title">Passions & Creative Drive</h2>
          </div>

          <div className="passions-grid">
            {passions.map((passion) => (
              <div
                key={passion.id}
                className="glass-card passion-tile"
                onClick={() => setSelectedPassion(passion)}
              >
                <div>
                  <div className="passion-icon">{passion.icon}</div>
                  <div className="passion-title">{passion.title}</div>
                  <div className="passion-tagline">{passion.tagline}</div>
                </div>
                <div style={{ marginTop: '1rem', color: '#d4af37', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Click to explore <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ padding: '4rem 0' }}>
          <div className="section-header">
            <div className="section-tag"><Sparkles size={14} /> Track Record</div>
            <h2 className="section-title">Professional Experience</h2>
          </div>

          <div className="exp-grid">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                  </div>
                  <div className="exp-meta">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <ul className="exp-list">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ padding: '4rem 0' }}>
          <div className="section-header">
            <div className="section-tag"><Sparkles size={14} /> Strategic Initiatives</div>
            <h2 className="section-title">Key Operational Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="glass-card project-card"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="project-cat">{proj.category}</div>
                <div className="project-title">{proj.title}</div>
                <div className="project-desc">{proj.desc}</div>
                <div style={{ marginTop: '1.5rem', color: '#a8c99c', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  View details <ExternalLink size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Passion Detail Modal */}
      {selectedPassion && (
        <div className="modal-overlay" onClick={() => setSelectedPassion(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPassion(null)} aria-label="Close">
              <X size={20} />
            </button>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{selectedPassion.icon}</div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>{selectedPassion.title}</h3>
            <p style={{ color: '#d4af37', fontWeight: '600', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              {selectedPassion.tagline}
            </p>
            <p style={{ color: '#c3d6b8', lineHeight: '1.7', fontSize: '1rem' }}>
              {selectedPassion.fullContent}
            </p>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="project-cat" style={{ marginTop: '0.5rem' }}>{selectedProject.category}</div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>{selectedProject.title}</h3>
            <p style={{ color: '#c3d6b8', lineHeight: '1.7', fontSize: '1rem' }}>
              {selectedProject.details}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {personalInfo.name} — Designed with Overgrown Nature Aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}